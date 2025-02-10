import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="/images/email-image.png"
        alt="email image"
        className="max-w-[200px] lg:mt-20"
      />
      <ContactInfo />
      {/* <ContactSocial /> */}
    </div>
  );
};

export default ContactMeRight;
