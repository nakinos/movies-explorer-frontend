import './SectionCaption.css';

function SectionCaption({ text }) {

    return (
        <>
            <h2 className='section-caption__text'>{text}</h2>
        </>
    );
}

export default SectionCaption;