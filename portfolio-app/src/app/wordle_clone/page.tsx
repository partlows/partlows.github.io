"use client";

import { Board } from "./components/Board";
import { ScreenKeyboard } from "./components/ScreenKeyboard";
import styles from "./page.module.scss";
import { FormProvider, useForm } from "react-hook-form";


export default function Page() {
    const methods = useForm({
        defaultValues: {

        }
    });
    return (
        <div className={styles.container}>
            <FormProvider {...methods}>
                <form onSubmit={() => {
                    console.log("you submitted the form with the following data: ", methods.getValues());
                }}>
                    <Board />
                    <ScreenKeyboard />
                </form>
            </FormProvider>
        </div>
    )
}