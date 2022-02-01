import "./styles.css";
import { ListItem } from "./components/ListItem";

const App = () => {
  const DATA = {
    menu1: [
      {
        title: "ヤフーニュース",
        link: "https://news.yahoo.co.jp/"
      },
      {
        title: "NHKニュース",
        link: "https://www3.nhk.or.jp/news/"
      }
    ],
    menu2: [
      {
        title: "Google",
        link: "https://www.google.com/?hl=ja"
      },
      {
        title: "Googleニュース",
        link: "https://news.google.com/topstories?hl=ja&gl=JP&ceid=JP:ja"
      },
      {
        title: "Googleメール",
        link: "https://www.google.co.jp/mail/help/intl/ja/about.html?vm=r"
      }
    ]
  };
  return (
    <>
      <h1>jsonオブジェクトのループ</h1>
      <ListItem itemData={DATA} />
    </>
  );
};

export default App;
