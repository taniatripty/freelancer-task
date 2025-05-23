const Featuredetails = ({ item, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.budget}</td>
      <td>{item.formatedate}</td>
    </tr>
  );
};

export default Featuredetails;
