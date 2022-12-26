import type {NextPage} from "next";
import { IBannerProps, Banner } from "@/components/banner";
import styles from "./index.module.scss";

interface IProps {
  title: string;
  description: string;
  list: {
    label: string;
    info: string;
    link: string;
  }[];
}

const Home: NextPage<IProps> = ({title, description, list}) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Banner />
      </main>
    </div>
  );
};

Home.getInitialProps = (context) => {
  return {
    title: "Hello SSR!",
    description: "A Demo for 《深入浅出SSR官网开发指南》",
    list: [
      {
        label: "文章1",
        info: "A test for article1",
        link: "http://localhost:3000/article/1",
      },
      {
        label: "文章2",
        info: "A test for article2",
        link: "http://localhost:3000/article/2",
      },
      {
        label: "文章3",
        info: "A test for article3",
        link: "http://localhost:3000/article/3",
      },
      {
        label: "文章4",
        info: "A test for article4",
        link: "http://localhost:3000/article/4",
      },
      {
        label: "文章5",
        info: "A test for article5",
        link: "http://localhost:3000/article/5",
      },
      {
        label: "文章6",
        info: "A test for article6",
        link: "http://localhost:3000/article/6",
      },
    ],
  };
};

export default Home;
