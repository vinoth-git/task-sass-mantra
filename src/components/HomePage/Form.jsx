import { useState } from "react";
import styles from "../../styles/HomePage/HomeComponent.module.scss";

function Form() {
  let initialValues = {
    Name: "",
    Email: "",
    Designation: "",
    Contact: "",
  };
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState({
    Name: "",
    Email: "",
    Designation: "",
    Contact: "",
  });

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
  };
  function updateValues(e) {
    if (e.target.name === "Contact") {
      if (e.target.value.length > 10) {
        return;
      }
      e.target.value = e.target.value.match(/\d/g).join("");
    }
    setValues({ ...values, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  }
  function validateForm() {
    let isValid = true;
    let Error = {};
    if (!values.Name) {
      Error["Name"] = "Please enter name";
      isValid = false;
    }
    if (!values.Email) {
      Error["Email"] = "Please enter email";
      isValid = false;
    } else if (values.Email) {
      let validateMail = validateEmail(values.Email);
      if (!validateMail) {
        Error["Email"] = "Please enter valid email";
        isValid = false;
      }
    }
    if (!values.Designation) {
      Error["Designation"] = "Please enter designation";
      isValid = false;
    }
    if (!values.Contact) {
      Error["Contact"] = "Please enter contact";
      isValid = false;
    } else if (values.Contact) {
      if (values.Contact.length !== 10) {
        Error["Contact"] = "Please enter valid contact";
        isValid = false;
      }
    }
    setError({ ...error, ...Error });
    return isValid;
  }

  function updateAPI(data) {
    fetch("/dummy-end-point", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setValues(initialValues);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className={styles.form_root}>
      <h1>Lorum Ispesum</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let isValid = validateForm();
          if (isValid) {
            updateAPI(values);
          }
        }}
      >
        <div className={styles.form}>
          <div>
            <div className={styles.form_label}>
              <label htmlFor="Name">Name</label>
              <input
                onChange={updateValues}
                type="text"
                placeholder="Name"
                name="Name"
              />
              {error.Name && <p>{error.Name}</p>}
            </div>
            <div className={styles.form_label}>
              <label htmlFor="Email">Email</label>
              <input
                onChange={updateValues}
                type="email"
                placeholder="Email"
                name="Email"
              />
              {error.Email && <p>{error.Email}</p>}
            </div>
          </div>
          <div>
            <div className={styles.form_label}>
              <label htmlFor="Designation">Designation</label>
              <input
                onChange={updateValues}
                type="text"
                placeholder="Designation"
                name="Designation"
              />
              {error.Designation && <p>{error.Designation}</p>}
            </div>
            <div className={styles.form_label}>
              <label htmlFor="Contact">Contact</label>
              <input
                onChange={updateValues}
                type="text"
                placeholder="Contact"
                value={values.Contact}
                name="Contact"
              />
              {error.Contact && <p>{error.Contact}</p>}
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
