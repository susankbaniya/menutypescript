import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  middleName?: string;
  lastName?: string;
};

function practice() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    // TypeScript doesn't know the shape of the form data being passed to onSubmit.
    console.log("submitting the form ", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input
          {...register("firstName", {
            required: true,
            minLength: { value: 3, message: "Min Len atleast 3" },
            maxLength: { value: 6, message: "Max Len almost 6" },
          })}
        />
        {typeof errors.firstName?.message === "string" && (
          <p>{errors.firstName.message}</p>
        )}
      </div>
      <br />
      <div>
        <label>Middle Name:</label>
        <input {...register("middleName")} />
      </div>
      <br />
      <div>
        <label>Last Name:</label>
        <input {...register("lastName")} />
      </div>
      <br />
      <input type="submit" />
    </form>
  );
}
export default practice;
