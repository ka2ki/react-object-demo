export const ListItem = (props) => {
  const { itemData } = props;

  return Object.entries(itemData).map(([menuNum, lists]) => {
    return (
      <ul className={menuNum} key={menuNum}>
        {lists.map((item) => {
          return (
            <li key={item.title}>
              <a href={item.link} target="_blank" rel="noreferrer noopener">
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    );
  });
};
