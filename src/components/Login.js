import { useForm } from "react-hook-form";
import './login.css';

export default function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)} style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            {/* register your input into the hook by invoking the "register" function */}
            <input
                defaultValue="test"
                {...register("example")}
                style={{
                    padding: "10px",
                    border: "none",
                    borderBottom: "1px solid black",
                    marginBottom: "20px"
                }}
            />

            {/* include validation with required or other standard HTML validation rules */}
            <input
                {...register("exampleRequired", { required: true })}
                style={{
                    padding: "10px",
                    border: "none",
                    borderBottom: "1px solid black",
                    marginBottom: "20px"
                }}
            />

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span className="error">This field is required</span>}

            <input
                type="submit"
                style={{
                    backgroundColor: "blue",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    border: "none"
                }}
            />
        </form>

    );
}