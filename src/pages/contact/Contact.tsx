import Container from "../../container/Container";

function Contact() {
  return (
    <div>
      <Container>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.275491568445!2d90.4238753465306!3d23.79899866669804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c74245b7df47%3A0xfc8e97c08c64d4d1!2sExcel%20HR%20Tower!5e0!3m2!1sen!2sbd!4v1725192536588!5m2!1sen!2sbd"
            height="450"
            loading="lazy"
            className="w-full rounded-xl border shadow-xl"
          />
        </div>
      </Container>
    </div>
  );
}

export default Contact;
