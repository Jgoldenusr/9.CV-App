import "./styles/styles.css";
import uniqid from "uniqid";
import { useState } from "react";
import { Controller, Header, Footer } from "./components/components.js";
import { saveAs } from "file-saver";
import { pdf, PDFViewer } from "@react-pdf/renderer";
import Docpdf from "./components/pdfDoc.js";
import CVForm from "./components/cvForm.js";

let template = {
  basicInfo: {
    name: "",
    surname: "",
    title: "",
    phone: "",
    email: "",
    dir: "",
  },
  educationInfo: {
    college: "",
    city: "",
    grade: "",
    subject: "",
    from: "",
    to: "",
    id: uniqid(),
  },
  practicalInfo: {
    position: "",
    company: "",
    city: "",
    from: "",
    to: "",
    id: uniqid(),
  },
  lists: {
    educationInfo: [],
    practicalInfo: [],
  },
  imageSrc: null,
};

function App() {
  const [info, setInfo] = useState(template);
  const [infoList, setInfoList] = useState(template.lists);
  const [view, setView] = useState("basicInfo");

  const addPhoto = function (e) {
    let src = URL.createObjectURL(e.target.files[0]);

    setInfo({
      ...info,
      imageSrc: src,
    });
  };
  const addSomething = function (e) {
    e.preventDefault();
    const fieldName = e.target.closest("form").dataset.field;

    setInfoList({
      ...infoList,
      [fieldName]: infoList[fieldName].concat(info[fieldName]),
    });
    setInfo({
      ...info,
      [fieldName]: {
        ...template[fieldName],
        id: uniqid(),
      },
    });
    setView(fieldName);
  };
  const deleteSomething = function (e) {
    const fieldName = e.target.closest("form").dataset.field;
    const tempArr = infoList[fieldName].filter(
      (item) => item.id !== info[fieldName].id
    );

    setInfoList({
      ...infoList,
      [fieldName]: tempArr,
    });
    setView("");
  };
  const handleChange = function (e) {
    const fieldName = e.target.closest("form").dataset.field;
    const tempId = e.target.name;

    setInfo({
      ...info,
      [fieldName]: {
        ...info[fieldName],
        [tempId]: e.target.value,
      },
    });
  };
  const setToUpdate = function (e) {
    const fieldName = e.target.closest(".card").dataset.field;
    const itemId = e.target.closest(".card").dataset.id;
    const data = infoList[fieldName].find((item) => item.id === itemId);

    setInfo({
      ...info,
      [fieldName]: { ...data },
    });
    setView(fieldName + "Update");
  };
  const updateSomething = function (e) {
    let tempIndex, tempArr;
    const fieldName = e.target.closest("form").dataset.field;
    tempIndex = infoList[fieldName].findIndex(
      (item) => item.id === info[fieldName].id
    );
    tempArr = Array.from(infoList[fieldName]);
    tempArr.splice(tempIndex, 1, info[fieldName]);

    setInfoList({
      ...infoList,
      [fieldName]: tempArr,
    });
    setInfo({
      ...info,
      [fieldName]: {
        ...template[fieldName],
        id: uniqid(),
      },
    });
    setView("");
  };
  const clearInfo = function (e) {
    setInfo({
      ...info,
      educationInfo: template.educationInfo,
      practicalInfo: template.practicalInfo,
    });
    return 1;
  };
  const generatePdf = async function (e) {
    /* jshint ignore:start */
    const blob = await pdf(
      <Docpdf
        basicInfo={info.basicInfo}
        practicalInfoArray={infoList.practicalInfo}
        educationInfoArray={infoList.educationInfo}
        imageSrc={info.imageSrc}
      />
    ).toBlob();
    saveAs(blob, "Mi CV");
    /* jshint ignore:end */
  };

  return (
    /* jshint ignore:start */
    <div className="main">
      <Header title="CV-App" />
      <div className="container">
        <Controller cbs={{ addPhoto, clearInfo, generatePdf, setView }} />
        {view === "pdfPreview" ? (
          <PDFViewer className="pdfContainer">
            <Docpdf info={info} infoList={infoList} />
          </PDFViewer>
        ) : (
          <CVForm
            info={info}
            infoList={infoList}
            view={view}
            cbs={{
              addSomething,
              deleteSomething,
              handleChange,
              setToUpdate,
              updateSomething,
            }}
          />
        )}
      </div>
      <Footer />
    </div>
    /* jshint ignore:end */
  );
}

export default App;
