import PropTypes from 'prop-types';
import css from './greeting.module.css';


export default function Greeting({ text }) {
    return (
        <p className={css.p}>
            {text}
        </p>
    );
}


Greeting.propTypes = {
    text: PropTypes.string,
};