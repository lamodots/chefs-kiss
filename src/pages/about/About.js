
import Banner from '../../component/Banner/Banner';
import Textbox from '../../component/Textbox/Textbox';

function About() {
  return (
    <div className ="About">
        <Banner titles="OUR STORY"/>
        <Textbox
        headings="HISTORY"
        texts ="In 1985, Fran Lively enjoyed dining at the then 15-month old Chef's Kiss. Upon learning it was to close, she purchased the restaurant, and in the ensuing years she instilled a gracious and sincere love for serving others. Since then, Via Reál has grown into a beautiful, successful establishment known nationwide for its relaxed Santa Fe style and delicious Mexican and Southwestern cuisine."
        />
        <Banner titles=" "/>
        <Textbox 
        headings="PHILOSOPHY"
        texts="When you enter Chef's Kiss, you are a guest in our home. We will do all we can to help you feel relaxed and comfortable. We want our service to be impeccable, the setting to be warm and inviting, and the food to be superb. Whether you are dining out with friends, or joining your colleagues for a private, corporate event, we truly hope your experience is delightful and memorable. Most of all we want you to feel welcomed...
        Because you are."/>
    </div>
  );
}
export default About;