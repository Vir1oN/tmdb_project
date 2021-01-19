import {useState} from "react";
import styles from "../../Layouts/Styles/BaseLayout.module.css";
import {useHistory} from "react-router-dom";

export function SearchBar() {
    const [inputValue, setInputValue] = useState('');
    const history = useHistory();

    const onInputHandler = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        history.push(`/search/${e.target.children[0].value}`);
    }

    return (
        <div className={styles.searchBarWrapper}>
            <form onSubmit={onSubmitHandler}>
                <input value={inputValue} onInput={onInputHandler}/>
                <button>Search</button>
            </form>
        </div>
    );
}