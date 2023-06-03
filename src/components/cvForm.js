import { FormController, CardStack } from "./components";

export default function CVForm(props) {
  const { view } = props;
  const { basicInfo, practicalInfo, educationInfo } = props.info;
  const {
    addSomething,
    handleChange,
    setToUpdate,
    updateSomething,
    deleteSomething,
  } = props.cbs;

  return (
    /* jshint ignore:start */
    <div style={{ marginTop: "0.5rem" }}>
      {view === "basicInfo" ? (
        <form data-field="basicInfo">
          <fieldset>
            <legend>Información personal</legend>
            <input
              placeholder="Nombre"
              type="text"
              name="name"
              value={basicInfo.name}
              onChange={handleChange}
              maxLength={10}
            />
            <input
              placeholder="Apellido"
              type="text"
              name="surname"
              value={basicInfo.surname}
              onChange={handleChange}
              maxLength={10}
            />
            <input
              placeholder="Título"
              type="text"
              name="title"
              value={basicInfo.title}
              onChange={handleChange}
              maxLength={15}
            />
            <input
              placeholder="Teléfono"
              type="text"
              name="phone"
              value={basicInfo.phone}
              onChange={handleChange}
              maxLength={15}
            />
            <input
              placeholder="Correo"
              type="text"
              name="email"
              value={basicInfo.email}
              onChange={handleChange}
              maxLength={25}
            />
            <input
              placeholder="Dirección"
              type="text"
              name="dir"
              value={basicInfo.dir}
              onChange={handleChange}
              maxLength={25}
            />
          </fieldset>
        </form>
      ) : view === "practicalInfo" || view === "practicalInfoUpdate" ? (
        <form
          data-field="practicalInfo"
          onSubmit={view === "practicalInfo" ? addSomething : updateSomething}
        >
          <fieldset>
            <legend>
              {view === "practicalInfo" ? "Añadir empleo" : "Editar empleo"}
            </legend>
            <input
              placeholder="Posición"
              type="text"
              name="position"
              value={practicalInfo.position}
              onChange={handleChange}
              maxLength={25}
            />
            <input
              placeholder="Compañía"
              type="text"
              name="company"
              value={practicalInfo.company}
              onChange={handleChange}
              maxLength={25}
            />
            <input
              placeholder="Ciudad"
              type="text"
              name="city"
              value={practicalInfo.city}
              onChange={handleChange}
              maxLength={25}
            />
            <input
              placeholder="Desde"
              type="text"
              name="from"
              value={practicalInfo.from}
              onChange={handleChange}
              maxLength={5}
            />
            <input
              placeholder="Hasta"
              type="text"
              name="to"
              value={practicalInfo.to}
              onChange={handleChange}
              maxLength={5}
            />
            <FormController view={view} deleteSomething={deleteSomething} />
          </fieldset>
        </form>
      ) : view === "educationInfo" || view === "educationInfoUpdate" ? (
        <form
          data-field="educationInfo"
          onSubmit={view === "educationInfo" ? addSomething : updateSomething}
        >
          <fieldset>
            <legend>
              {view === "educationInfo"
                ? "Añadir certificación"
                : "Editar certificación"}
            </legend>
            <input
              placeholder="Institución"
              type="text"
              name="college"
              value={educationInfo.college}
              onChange={handleChange}
              maxLength={25}
            />
            <input
              placeholder="Ciudad"
              type="text"
              name="city"
              value={educationInfo.city}
              onChange={handleChange}
              maxLength={25}
            />
            <input
              placeholder="Grado"
              type="text"
              name="grade"
              value={educationInfo.grade}
              onChange={handleChange}
              maxLength={25}
            />
            <input
              placeholder="Mención"
              type="text"
              name="subject"
              value={educationInfo.subject}
              onChange={handleChange}
              maxLength={25}
            />
            <input
              placeholder="Desde"
              type="text"
              name="from"
              value={educationInfo.from}
              onChange={handleChange}
              maxLength={5}
            />
            <input
              placeholder="Hasta"
              type="text"
              name="to"
              value={educationInfo.to}
              onChange={handleChange}
              maxLength={5}
            />
            <FormController view={view} deleteSomething={deleteSomething} />
          </fieldset>
        </form>
      ) : (
        <CardStack lists={props.infoList} setToUpdate={setToUpdate} />
      )}
    </div>
    /* jshint ignore:end */
  );
}
