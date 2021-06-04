import { useField } from 'formik';
import React from 'react';
import { Form, Label } from 'semantic-ui-react';

interface Props {
    name: string,
    placeholder: string,
    rows: number,
    label?: string
}

export default function MyTextArea(props: Props) {
    const [Field, meta] = useField(props.name);
    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <textarea {...Field} {...props} rows={props.rows} />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
        </Form.Field>
    )
}