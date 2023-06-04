import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faFileCircleCheck,
  faFileDownload,
  faFilePdf,
  faGears,
  faGraduationCap,
  faIdCard,
  faImage,
  faSave,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
    /* jshint ignore:start */
    <header>
      <FontAwesomeIcon icon={faFileCircleCheck} className="headerIcon" />
      <span className="headerSpan">{props.title}</span>
    </header>
    /* jshint ignore:end */
  );
}
function Footer() {
  return (
    /* jshint ignore:start */
    <footer>
      <a href="https://github.com/Jgoldenusr">
        <FontAwesomeIcon icon={faGithub} className="footerIcon" />
      </a>
      <span className="footerSpan">Copyright © 2023 Jgoldenusr</span>
    </footer>
    /* jshint ignore:end */
  );
}
function Controller(props) {
  const { addPhoto, clearInfo, generatePdf, setView } = props.cbs;
  return (
    /* jshint ignore:start */
    <div className="btnContainer">
      <div>
        <div
          className="btn"
          onClick={() => {
            setView("pdfPreview");
          }}
        >
          <FontAwesomeIcon icon={faFilePdf} className="fa" />
        </div>
        <div className="btn" onClick={generatePdf}>
          <FontAwesomeIcon icon={faFileDownload} className="fa" />
        </div>
      </div>
      <div>
        <div className="btn">
          <label htmlFor="imgInput">
            <FontAwesomeIcon icon={faImage} className="fa" />
          </label>
          <input
            type="file"
            id="imgInput"
            accept=".png, .jpg, .jpeg"
            onChange={addPhoto}
          />
        </div>
        <div className="btn" onClick={() => setView("basicInfo")}>
          <FontAwesomeIcon icon={faIdCard} className="fa" />
        </div>
        <div
          className="btn"
          onClick={() => clearInfo() && setView("educationInfo")}
        >
          <FontAwesomeIcon icon={faGraduationCap} className="fa" />
        </div>
        <div
          className="btn"
          onClick={() => clearInfo() && setView("practicalInfo")}
        >
          <FontAwesomeIcon icon={faBriefcase} className="fa" />
        </div>
        <div className="btn" onClick={() => setView("cards")}>
          <FontAwesomeIcon icon={faGears} className="fa" />
        </div>
      </div>
    </div>
    /* jshint ignore:end */
  );
}
function FormController(props) {
  const { view, deleteSomething } = props;
  return (
    /* jshint ignore:start */
    view === "practicalInfo" || view === "practicalInfoUpdate" ? (
      <div className="btnContainer" style={{ marginTop: "0.5rem" }}>
        <div></div>
        <div>
          <div className="btn">
            <label htmlFor="jobInput">
              <FontAwesomeIcon icon={faSave} className="fa" />
            </label>
            <input type="submit" id="jobInput" />
          </div>
          {view !== "practicalInfo" ? (
            <div className="btn" onClick={deleteSomething}>
              <FontAwesomeIcon icon={faTrash} className="fa" />
            </div>
          ) : null}
        </div>
      </div>
    ) : (
      <div className="btnContainer" style={{ marginTop: "0.5rem" }}>
        <div></div>
        <div>
          <div className="btn">
            <label htmlFor="educationInput">
              <FontAwesomeIcon icon={faSave} className="fa" />
            </label>
            <input type="submit" id="educationInput" />
          </div>
          {view !== "educationInfo" ? (
            <div className="btn" onClick={deleteSomething}>
              <FontAwesomeIcon icon={faTrash} className="fa" />
            </div>
          ) : null}
        </div>
      </div>
    )
    /* jshint ignore:end */
  );
}

function CardStack(props) {
  const { practicalInfo, educationInfo } = props.lists;
  return (
    /* jshint ignore:start */
    <div className="cardStack">
      {practicalInfo
        ? practicalInfo.map((element) => {
            return (
              <div
                className="card"
                data-field="practicalInfo"
                data-id={element.id}
                key={element.id}
                onClick={props.setToUpdate}
              >
                <div className="cardIconWrap">
                  <FontAwesomeIcon icon={faBriefcase} className="fa" />
                </div>
                <div className="cardText">
                  <h3>{`${element.company + ", " + element.city}`}</h3>
                  <p>{`${element.from + " - " + element.to}`}</p>
                  <p>{`${element.position}`}</p>
                </div>
              </div>
            );
          })
        : null}
      {educationInfo
        ? educationInfo.map((element) => {
            return (
              <div
                className="card"
                data-field="educationInfo"
                data-id={element.id}
                key={element.id}
                onClick={props.setToUpdate}
              >
                <div className="cardIconWrap">
                  <FontAwesomeIcon icon={faGraduationCap} className="fa" />
                </div>
                <div className="cardText">
                  <h3>{`${element.college + ", " + element.city}`}</h3>
                  <p> {`${element.from + " - " + element.to}`}</p>
                  <p>{`${element.grade}, ${element.subject}`}</p>
                </div>
              </div>
            );
          })
        : null}
    </div>
    /* jshint ignore:end */
  );
}
export { CardStack, Controller, FormController, Header, Footer };
