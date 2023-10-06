import TextInput from "../Inputs/TextInput";

const AddSocialsForm = () => {
  return (
    <form className="flex flex-col gap-8">
      <TextInput
        type="text"
        placeholder="https://twitter.com/..."
        label="Twitter"
      />
      <TextInput
        type="text"
        placeholder="https://www.linkedin.com/..."
        label="LinkedIn"
      />
      <TextInput
        type="text"
        placeholder="https://instagram.com/..."
        label="Instagram"
      />
      <TextInput
        type="text"
        placeholder="https://facebook.com/..."
        label="Facebook"
      />
    </form>
  );
};

export default AddSocialsForm;
