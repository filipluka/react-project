
import ContactBoxes from '../components/contact/contactBoxes';
import ContactIngress from '../components/contact/contactIngress';
import Form from '../components/contact/form';
import Section1Top from '../components/contact/section1-top';
import Footer from '../components/section-footer/footer';
import Map from '../components/contact/map'

function Contact() {
  return (
    <div className="contact">
        <Section1Top />
        <ContactIngress />
        <ContactBoxes/>
        <Form />
        <Map />
        <Footer />
    </div>
  );
}

export default Contact;