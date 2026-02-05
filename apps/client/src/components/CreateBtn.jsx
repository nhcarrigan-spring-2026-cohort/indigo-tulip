function CreateBtn({ text, onClick }) {
  return (
    <button className="create-btn" onClick={onClick}>
      {text}
    </button>
  );
}

export default CreateBtn;
