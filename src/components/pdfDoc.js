import lato from "../pdffonts/Lato-Regular.ttf";
import latoItalic from "../pdffonts/Lato-Italic.ttf";
import latoBold from "../pdffonts/Lato-Bold.ttf";
import rokkitt from "../pdffonts/Rokkitt-Regular.ttf";
import rokkittItalic from "../pdffonts/Rokkitt-Italic.ttf";
import rokkittBold from "../pdffonts/Rokkitt-Bold.ttf";
import headshot from "../img/headshot.jpg";

import {
  Font,
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

//fix fonsize and styles and font families

const styles = StyleSheet.create({
  global: {
    border: "0",
    display: "block",
    font: "inherit",
    fontSize: "14px",
    fontFamily: "Lato",
    margin: "0",
    padding: "0",
  },
  paragraph: {
    color: "#444",
    marginBottom: "10px",
  },
  mainDetails: {
    alignItems: "center",
    backgroundColor: "#ededed",
    borderBottom: "2px solid #cf8a05",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "25px 35px",
  },
  mainArea: {
    padding: "0 40px",
  },
  personalInfo: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  nameH1: {
    fontFamily: "Rokkitt",
    fontWeight: "bold",
    fontSize: "24px",
    marginBottom: "-6px",
  },
  nameH2: {
    fontFamily: "Rokkitt",
    fontSize: "20px",
  },
  headshot: {
    marginRight: "20px",
    width: "80px",
    height: "80px",
  },
  img: {
    borderRadius: "50%",
    height: "100%",
    width: "100%",
  },
  ul: {
    marginTop: "2px",
  },
  li: {
    color: "#444",
    marginBottom: "3px",
  },
  section: {
    borderBottom: "1px solid #dedede",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "20px 0 0",
  },
  sectionTitle: {
    width: "25%",
  },
  sectionContent: {
    width: "65%",
  },
  sectionTitleH1: {
    fontFamily: "Rokkitt",
    fontStyle: "italic",
    color: "#cf8a05",
  },
  sectionContentH2: {
    fontFamily: "Rokkitt",
    marginBottom: "-2px",
  },
  subDetails: {
    fontStyle: "italic",
    marginBottom: "3px",
  },
  clear: {
    clear: "both",
  },
});

export default function Docpdf(props) {
  const { basicInfo, imageSrc } = props.info;
  const { practicalInfo, educationInfo } = props.infoList;
  Font.register({
    family: "Lato",
    fonts: [
      { src: lato, fontStyle: "normal", fontWeight: "normal" },
      { src: latoItalic, fontStyle: "italic", fontWeight: "normal" },
      { src: latoBold, fontStyle: "normal", fontWeight: "bold" },
    ],
  });
  Font.register({
    family: "Rokkitt",
    fonts: [
      { src: rokkitt, fontStyle: "normal", fontWeight: "normal" },
      { src: rokkittItalic, fontStyle: "italic", fontWeight: "normal" },
      { src: rokkittBold, fontStyle: "normal", fontWeight: "bold" },
    ],
  });

  return (
    /* jshint ignore:start */
    <Document>
      <Page size="LETTER">
        <View style={[styles.global, styles.mainDetails]}>
          <View style={[styles.personalInfo]}>
            <View style={[styles.global, styles.headshot]}>
              <Image
                style={[styles.global, styles.img]}
                src={imageSrc ? imageSrc : headshot}
                alt="Profile photo"
              />
            </View>
            <View style={[styles.global]}>
              <Text style={[styles.global, styles.nameH1]}>{`${
                basicInfo.name + " " + basicInfo.surname
              }`}</Text>
              <Text
                style={[styles.global, styles.nameH2]}
              >{`${basicInfo.title}`}</Text>
            </View>
          </View>
          <View style={[styles.global]}>
            <View style={[styles.global, styles.ul]}>
              <Text
                style={[styles.global, styles.li]}
              >{`D: ${basicInfo.dir}`}</Text>
              <Text
                style={[styles.global, styles.li]}
              >{`T: ${basicInfo.phone}`}</Text>
              <Text
                style={[styles.global, styles.li]}
              >{`E: ${basicInfo.email}`}</Text>
            </View>
          </View>
          <View style={[styles.global, styles.clear]}></View>
        </View>
        <View style={[styles.global, styles.mainArea]}>
          <View style={[styles.global, styles.section]}>
            <View style={[styles.global, styles.sectionTitle]}>
              <Text style={[styles.global, styles.sectionTitleH1]}>
                Experiencia laboral
              </Text>
            </View>
            <View style={[styles.global, styles.sectionContent]}>
              {practicalInfo.map((element) => {
                return (
                  <View
                    style={[styles.global, styles.article]}
                    key={element.id}
                  >
                    <Text style={[styles.global, styles.sectionContentH2]}>
                      {`${element.company + ", " + element.city}`}
                    </Text>
                    <Text style={[styles.global, styles.subDetails]}>
                      {`${element.from + " - " + element.to}`}
                    </Text>
                    <Text style={[styles.global, styles.paragraph]}>
                      {`${element.position}`}
                    </Text>
                  </View>
                );
              })}
            </View>
            <View style={[styles.global, styles.clear]}></View>
          </View>
          <View style={[styles.global, styles.section]}>
            <View style={[styles.global, styles.sectionTitle]}>
              <Text style={[styles.global, styles.sectionTitleH1]}>
                Experiencia académica
              </Text>
            </View>
            <View style={[styles.global, styles.sectionContent]}>
              {educationInfo.map((element) => {
                return (
                  <View
                    style={[styles.global, styles.article]}
                    key={element.id}
                  >
                    <Text style={[styles.global, styles.sectionContentH2]}>
                      {`${element.college + ", " + element.city}`}
                    </Text>
                    <Text style={[styles.global, styles.subDetails]}>
                      {`${element.from + " - " + element.to}`}
                    </Text>
                    <Text style={[styles.global, styles.paragraph]}>
                      {`${element.grade}, ${element.subject}`}
                    </Text>
                  </View>
                );
              })}
            </View>
            <View style={[styles.global, styles.clear]}></View>
          </View>
        </View>
      </Page>
    </Document>
    /* jshint ignore:end */
  );
}
/*

*/
