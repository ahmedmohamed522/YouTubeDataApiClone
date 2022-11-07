import { useCallback, useState } from "react";
import { savedPages as data } from "../data/data";

export const useSavePagesAndCreateCategories = () => {
    const [userFocus, setUserFocus] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [inputError, setInputError] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [categories, setCategories] = useState(data);
    const [showAlert, setShowAlert] = useState(false);
    const [alertText, setAlertText] = useState("");

    const closeAlert = useCallback(() => {
        setShowAlert(false);
    }, []);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };
    const removeInputError = () => {
        setInputError(false);
    };
    const putInputError = () => {
        setInputError(true);
    };
    const submitValue = () => {
        setSubmit(true);
    };

    const alertHandler = (text = "Copied to clipboard") => {
        setShowAlert(true);
        setAlertText(text);
    };
    const closeDropdown = useCallback(() => {
        setUserFocus(false);
        setDropdown(false);
        setInputError(false);
        setSubmit(false);
    }, []);

    const addCategory = (val) => {
        if (val.trim().length === 0) {
            setInputError(true);
        } else {
            setUserFocus(false);
            setInputError(false);
            setSubmit(false);
            setCategories([...categories, val.trim()]);

            alertHandler("Collection sa created.");
        }
    };

    const userFocusFn = () => {
        setUserFocus(true);
    };

    return {
        submit,
        inputError,
        dropdown,
        userFocus,
        categories,
        showAlert,
        alertText,
        closeDropdown,
        addCategory,
        toggleDropdown,
        removeInputError,
        putInputError,
        submitValue,
        userFocusFn,
        alertHandler,
        closeAlert,
    };
};
