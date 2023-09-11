const ErrorMessage = ({errors, name}: {errors: any, name: String}) => {
  if (errors[`${name}`]) {
    return <div className="text-red-600">{errors[`${name}`]}</div>;
  } else {
    return null;
  }
};

export default ErrorMessage;
