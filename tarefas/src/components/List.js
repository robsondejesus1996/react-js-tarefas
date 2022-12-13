const List = () => {
  const items = [
    {
      id: 1,
      name: "Robson",
    },
    {
      id: 2,
      name: "Maria",
    },
  ];

  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>
          {item.id} - {item.name}
        </p>
      ))}
    </div>
  );
};

export default List;
