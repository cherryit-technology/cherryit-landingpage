import * as React from "react";

const ContactForm: React.FC = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/shell.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "40071122",
          formId: "9b5bc9e3-a5e5-4d5a-8a39-8c8e05f68ed4",
          target: "#hubspotForm",
        });
      }
    });
  }, []);

  return (
    <div>
      <div id="hubspotForm"></div>
    </div>
  );
};
export { ContactForm };
