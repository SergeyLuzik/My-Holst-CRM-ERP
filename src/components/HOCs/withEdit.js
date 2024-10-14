export const withEdit = (Component) => (props) => {
  const [text, setText] = useState(props.text);
  const [editMode, setEditMode] = useState(false);

  const handleRootClick = () => {
    console.log("editMode", editMode);
    setEditMode((prev) => (prev ? prev : !prev));
  };

  const handleValueChange = (value) => {
    console.log("setting value by setText", value);
    setText(value);

    setEditMode(false);
  };
  return (
    <S.Wrapper onClick={handleRootClick}>
      {editMode ? (
        <Editor value={text} handleValueChange={handleValueChange} />
      ) : (
        <Component {...props} />
      )}
    </S.Wrapper>
  );
};
