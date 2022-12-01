export const Select = ({ tab, handleChangeTab }) => {
  return (
    <select
      placeholder="Choose your path"
      className="select-item"
      value={tab}
      onChange={handleChangeTab}
    >
      <option>Judoists</option>
      <option>Footballers</option>
      <option>Boxers</option>
    </select>
  );
};
