import { createContext, useState } from "react";

export const ImgsContext = createContext();

export const ImgsProvider = ({ children }) => {
  const [level, setLevel] = useState("1");
  const olddata = level === "1"
  ? [
      {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/ar/b/be/Ismaily-Club-Logo.png",
        flip: false,
      },
      {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/ar/b/be/Ismaily-Club-Logo.png",
        flip: false,
      },
      {
        id: 3,
        img: "https://i.pinimg.com/736x/e7/83/4f/e7834fb6fd4f1230f474bbdacda301de.jpg",
        flip: false,
      },
      {
        id: 4,
        img: "https://i.pinimg.com/736x/e7/83/4f/e7834fb6fd4f1230f474bbdacda301de.jpg",
        flip: false,
      },
      {
        id: 5,
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0FIYtMalyN8SvKaKM-A_uNheLGPgs9sWxi5Hdk31koQUX_NMJdceuqePeMxg9Ew2JImhCgEJaAjf7_qLJzzIYb-ptYLnRQW7am7AqHoAcd9IcpFhLd69oDnIlBioxPYO1CtYMsBRLf1ZhNkBbdNwOJ7KlgYts9ny17eFaRaskI1Txx7qIeV-7OIYZ/s1600/al-ahly-update-logo%20%282%29.jpg",
        flip: false,
      },
      {
        id: 8,
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0FIYtMalyN8SvKaKM-A_uNheLGPgs9sWxi5Hdk31koQUX_NMJdceuqePeMxg9Ew2JImhCgEJaAjf7_qLJzzIYb-ptYLnRQW7am7AqHoAcd9IcpFhLd69oDnIlBioxPYO1CtYMsBRLf1ZhNkBbdNwOJ7KlgYts9ny17eFaRaskI1Txx7qIeV-7OIYZ/s1600/al-ahly-update-logo%20%282%29.jpg",
        flip: false,
      },
      {
        id: 0,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jcMhOPMjOI_6BC1XhNqswHsE-S2xtWFNew&usqp=CAU",
        flip: false,
      },
      {
        id: 12,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jcMhOPMjOI_6BC1XhNqswHsE-S2xtWFNew&usqp=CAU",
        flip: false,
      },
      {
        id: 444,
        img: "https://yt3.googleusercontent.com/y4imsDnCbOS_La1f3H8u0YLh-XV6ZtSpy5FRgn7DRyAei5-dGWeDvpVn7grr6sRqE_DcmjCw1Q=s900-c-k-c0x00ffffff-no-rj",
        flip: false,
      },
      {
        id: 111,
        img: "https://yt3.googleusercontent.com/y4imsDnCbOS_La1f3H8u0YLh-XV6ZtSpy5FRgn7DRyAei5-dGWeDvpVn7grr6sRqE_DcmjCw1Q=s900-c-k-c0x00ffffff-no-rj",
        flip: false,
      },
    ]
  : level === "2"
  ? [
      {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/ar/b/be/Ismaily-Club-Logo.png",
        flip: false,
      },
      {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/ar/b/be/Ismaily-Club-Logo.png",
        flip: false,
      },
      {
        id: 3,
        img: "https://i.pinimg.com/736x/e7/83/4f/e7834fb6fd4f1230f474bbdacda301de.jpg",
        flip: false,
      },
      {
        id: 4,
        img: "https://i.pinimg.com/736x/e7/83/4f/e7834fb6fd4f1230f474bbdacda301de.jpg",
        flip: false,
      },
      {
        id: 5,
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0FIYtMalyN8SvKaKM-A_uNheLGPgs9sWxi5Hdk31koQUX_NMJdceuqePeMxg9Ew2JImhCgEJaAjf7_qLJzzIYb-ptYLnRQW7am7AqHoAcd9IcpFhLd69oDnIlBioxPYO1CtYMsBRLf1ZhNkBbdNwOJ7KlgYts9ny17eFaRaskI1Txx7qIeV-7OIYZ/s1600/al-ahly-update-logo%20%282%29.jpg",
        flip: false,
      },
      {
        id: 8,
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0FIYtMalyN8SvKaKM-A_uNheLGPgs9sWxi5Hdk31koQUX_NMJdceuqePeMxg9Ew2JImhCgEJaAjf7_qLJzzIYb-ptYLnRQW7am7AqHoAcd9IcpFhLd69oDnIlBioxPYO1CtYMsBRLf1ZhNkBbdNwOJ7KlgYts9ny17eFaRaskI1Txx7qIeV-7OIYZ/s1600/al-ahly-update-logo%20%282%29.jpg",
        flip: false,
      },
      {
        id: 0,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jcMhOPMjOI_6BC1XhNqswHsE-S2xtWFNew&usqp=CAU",
        flip: false,
      },
      {
        id: 12,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jcMhOPMjOI_6BC1XhNqswHsE-S2xtWFNew&usqp=CAU",
        flip: false,
      },
      {
        id: 444,
        img: "https://yt3.googleusercontent.com/y4imsDnCbOS_La1f3H8u0YLh-XV6ZtSpy5FRgn7DRyAei5-dGWeDvpVn7grr6sRqE_DcmjCw1Q=s900-c-k-c0x00ffffff-no-rj",
        flip: false,
      },
      {
        id: 111,
        img: "https://yt3.googleusercontent.com/y4imsDnCbOS_La1f3H8u0YLh-XV6ZtSpy5FRgn7DRyAei5-dGWeDvpVn7grr6sRqE_DcmjCw1Q=s900-c-k-c0x00ffffff-no-rj",
        flip: false,
      },

      {
        id: 1111,
        img: "https://5alfiat.com/wp-content/uploads/2023/02/%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9-%D9%84%D9%84%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84-15.jpeg",
        flip: false,
      },
      {
        id: 231,
        img: "https://5alfiat.com/wp-content/uploads/2023/02/%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9-%D9%84%D9%84%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84-15.jpeg",
        flip: false,
      },
      {
        id: 1231,
        img: "https://saudia9.com/wp-content/uploads/2020/09/%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9.jpg",
        flip: false,
      },
      {
        id: 131,
        img: "https://saudia9.com/wp-content/uploads/2020/09/%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9.jpg",
        flip: false,
      },
      {
        id: 531,
        img: "https://1.bp.blogspot.com/--_sEje9RnwI/XdUaEehUN6I/AAAAAAAAAL4/BcMJxxNuWjAH8ePz4lIAme0QZK_oFK53wCLcBGAsYHQ/s1600/1.jpg",
        flip: false,
      },
      {
        id: 31,
        img: "https://1.bp.blogspot.com/--_sEje9RnwI/XdUaEehUN6I/AAAAAAAAAL4/BcMJxxNuWjAH8ePz4lIAme0QZK_oFK53wCLcBGAsYHQ/s1600/1.jpg",
        flip: false,
      },
    ]
  : level === "3"
  ? [
      {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/ar/b/be/Ismaily-Club-Logo.png",
        flip: false,
      },
      {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/ar/b/be/Ismaily-Club-Logo.png",
        flip: false,
      },
      {
        id: 3,
        img: "https://i.pinimg.com/736x/e7/83/4f/e7834fb6fd4f1230f474bbdacda301de.jpg",
        flip: false,
      },
      {
        id: 4,
        img: "https://i.pinimg.com/736x/e7/83/4f/e7834fb6fd4f1230f474bbdacda301de.jpg",
        flip: false,
      },
      {
        id: 5,
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0FIYtMalyN8SvKaKM-A_uNheLGPgs9sWxi5Hdk31koQUX_NMJdceuqePeMxg9Ew2JImhCgEJaAjf7_qLJzzIYb-ptYLnRQW7am7AqHoAcd9IcpFhLd69oDnIlBioxPYO1CtYMsBRLf1ZhNkBbdNwOJ7KlgYts9ny17eFaRaskI1Txx7qIeV-7OIYZ/s1600/al-ahly-update-logo%20%282%29.jpg",
        flip: false,
      },
      {
        id: 8,
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0FIYtMalyN8SvKaKM-A_uNheLGPgs9sWxi5Hdk31koQUX_NMJdceuqePeMxg9Ew2JImhCgEJaAjf7_qLJzzIYb-ptYLnRQW7am7AqHoAcd9IcpFhLd69oDnIlBioxPYO1CtYMsBRLf1ZhNkBbdNwOJ7KlgYts9ny17eFaRaskI1Txx7qIeV-7OIYZ/s1600/al-ahly-update-logo%20%282%29.jpg",
        flip: false,
      },
      {
        id: 0,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jcMhOPMjOI_6BC1XhNqswHsE-S2xtWFNew&usqp=CAU",
        flip: false,
      },
      {
        id: 12,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jcMhOPMjOI_6BC1XhNqswHsE-S2xtWFNew&usqp=CAU",
        flip: false,
      },
      {
        id: 444,
        img: "https://yt3.googleusercontent.com/y4imsDnCbOS_La1f3H8u0YLh-XV6ZtSpy5FRgn7DRyAei5-dGWeDvpVn7grr6sRqE_DcmjCw1Q=s900-c-k-c0x00ffffff-no-rj",
        flip: false,
      },
      {
        id: 111,
        img: "https://yt3.googleusercontent.com/y4imsDnCbOS_La1f3H8u0YLh-XV6ZtSpy5FRgn7DRyAei5-dGWeDvpVn7grr6sRqE_DcmjCw1Q=s900-c-k-c0x00ffffff-no-rj",
        flip: false,
      },

      {
        id: 1111,
        img: "https://5alfiat.com/wp-content/uploads/2023/02/%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9-%D9%84%D9%84%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84-15.jpeg",
        flip: false,
      },
      {
        id: 231,
        img: "https://5alfiat.com/wp-content/uploads/2023/02/%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9-%D9%84%D9%84%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84-15.jpeg",
        flip: false,
      },
      {
        id: 1231,
        img: "https://saudia9.com/wp-content/uploads/2020/09/%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9.jpg",
        flip: false,
      },
      {
        id: 131,
        img: "https://saudia9.com/wp-content/uploads/2020/09/%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9.jpg",
        flip: false,
      },
      {
        id: 531,
        img: "https://1.bp.blogspot.com/--_sEje9RnwI/XdUaEehUN6I/AAAAAAAAAL4/BcMJxxNuWjAH8ePz4lIAme0QZK_oFK53wCLcBGAsYHQ/s1600/1.jpg",
        flip: false,
      },
      {
        id: 31,
        img: "https://1.bp.blogspot.com/--_sEje9RnwI/XdUaEehUN6I/AAAAAAAAAL4/BcMJxxNuWjAH8ePz4lIAme0QZK_oFK53wCLcBGAsYHQ/s1600/1.jpg",
        flip: false,
      },
      {
        id: 731,
        img: "https://www.oniriapictures.com/wp-content/uploads/2023/01/D8AED984D981D98AD8A7D8AA-D8A7D8B3D984D8A7D985D98AD8A9-2.png",
        flip: false,
      },
      {
        id: 1311,
        img: "https://www.oniriapictures.com/wp-content/uploads/2023/01/D8AED984D981D98AD8A7D8AA-D8A7D8B3D984D8A7D985D98AD8A9-2.png",
        flip: false,
      },
      {
        id: 146,
        img: "https://wordss.cc/wp-content/uploads/2021/02/2422.jpg",
        flip: false,
      },
      {
        id: 1446,
        img: "https://wordss.cc/wp-content/uploads/2021/02/2422.jpg",
        flip: false,
      },
      {
        id: 555,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6RIiZV99a7FkHPcK8YCmS06HRyGXly-Ou_g&usqp=CAU",
        flip: false,
      },
      {
        id: 1046,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6RIiZV99a7FkHPcK8YCmS06HRyGXly-Ou_g&usqp=CAU",
        flip: false,
      },
    ]
  : "";
  const [hData, setHData] = useState([]);
  const setAllData = () => {
    setHData((d) => {
      return [...olddata.sort((a,b) => a.id - b.id)]
    });
  };
  const [saveData, setSaveData] = useState(hData);
  const handleFlip = (id) => {
    const hh = [...hData];
    const newData = hData.map((el) => {
      if (el.id == id) {
        return { ...el, flip: !el.flip };
      }
      return el;
    });
    setHData((d) => {
      return [...newData];
    });
    setTimeout(() => checkSimilars(newData, hh), 500);
  };
  const checkSimilars = (data, hh) => {
    const newOne = data.filter((d) => d.flip);
    if (newOne.length === 2) {
      if (newOne[0].img === newOne[1].img) {
        setHData((d) => {
          return d.filter((d) => d != newOne[0] && d != newOne[1]);
        });
        setSaveData((d) => {
          return d.filter((d) => d != newOne[0] && d != newOne[1]);
        });
      } else {
        const dataN = [...hh];
        setHData((d) => {
          return dataN.map((el) => {
            return { ...el, flip: false };
          });
        });
      }
    }
  };
  const handleAgain = () => {
    setHData(olddata.sort((a,b) => a.id - b.id));
    setSaveData(olddata.sort((a,b) => a.id - b.id));
  };
  const handleSetLevel = (level) => {
    setLevel(level);
    setHData(d => {
      const data = level === "1"
      ? [
          {
            id: 1,
            img: "https://upload.wikimedia.org/wikipedia/ar/b/be/Ismaily-Club-Logo.png",
            flip: false,
          },
          {
            id: 2,
            img: "https://upload.wikimedia.org/wikipedia/ar/b/be/Ismaily-Club-Logo.png",
            flip: false,
          },
          {
            id: 3,
            img: "https://i.pinimg.com/736x/e7/83/4f/e7834fb6fd4f1230f474bbdacda301de.jpg",
            flip: false,
          },
          {
            id: 4,
            img: "https://i.pinimg.com/736x/e7/83/4f/e7834fb6fd4f1230f474bbdacda301de.jpg",
            flip: false,
          },
          {
            id: 5,
            img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0FIYtMalyN8SvKaKM-A_uNheLGPgs9sWxi5Hdk31koQUX_NMJdceuqePeMxg9Ew2JImhCgEJaAjf7_qLJzzIYb-ptYLnRQW7am7AqHoAcd9IcpFhLd69oDnIlBioxPYO1CtYMsBRLf1ZhNkBbdNwOJ7KlgYts9ny17eFaRaskI1Txx7qIeV-7OIYZ/s1600/al-ahly-update-logo%20%282%29.jpg",
            flip: false,
          },
          {
            id: 8,
            img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0FIYtMalyN8SvKaKM-A_uNheLGPgs9sWxi5Hdk31koQUX_NMJdceuqePeMxg9Ew2JImhCgEJaAjf7_qLJzzIYb-ptYLnRQW7am7AqHoAcd9IcpFhLd69oDnIlBioxPYO1CtYMsBRLf1ZhNkBbdNwOJ7KlgYts9ny17eFaRaskI1Txx7qIeV-7OIYZ/s1600/al-ahly-update-logo%20%282%29.jpg",
            flip: false,
          },
          {
            id: 0,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jcMhOPMjOI_6BC1XhNqswHsE-S2xtWFNew&usqp=CAU",
            flip: false,
          },
          {
            id: 12,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jcMhOPMjOI_6BC1XhNqswHsE-S2xtWFNew&usqp=CAU",
            flip: false,
          },
          {
            id: 444,
            img: "https://yt3.googleusercontent.com/y4imsDnCbOS_La1f3H8u0YLh-XV6ZtSpy5FRgn7DRyAei5-dGWeDvpVn7grr6sRqE_DcmjCw1Q=s900-c-k-c0x00ffffff-no-rj",
            flip: false,
          },
          {
            id: 111,
            img: "https://yt3.googleusercontent.com/y4imsDnCbOS_La1f3H8u0YLh-XV6ZtSpy5FRgn7DRyAei5-dGWeDvpVn7grr6sRqE_DcmjCw1Q=s900-c-k-c0x00ffffff-no-rj",
            flip: false,
          },
        ]
      : level === "2"
      ? [
          {
            id: 1,
            img: "https://upload.wikimedia.org/wikipedia/ar/b/be/Ismaily-Club-Logo.png",
            flip: false,
          },
          {
            id: 2,
            img: "https://upload.wikimedia.org/wikipedia/ar/b/be/Ismaily-Club-Logo.png",
            flip: false,
          },
          {
            id: 3,
            img: "https://i.pinimg.com/736x/e7/83/4f/e7834fb6fd4f1230f474bbdacda301de.jpg",
            flip: false,
          },
          {
            id: 4,
            img: "https://i.pinimg.com/736x/e7/83/4f/e7834fb6fd4f1230f474bbdacda301de.jpg",
            flip: false,
          },
          {
            id: 5,
            img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0FIYtMalyN8SvKaKM-A_uNheLGPgs9sWxi5Hdk31koQUX_NMJdceuqePeMxg9Ew2JImhCgEJaAjf7_qLJzzIYb-ptYLnRQW7am7AqHoAcd9IcpFhLd69oDnIlBioxPYO1CtYMsBRLf1ZhNkBbdNwOJ7KlgYts9ny17eFaRaskI1Txx7qIeV-7OIYZ/s1600/al-ahly-update-logo%20%282%29.jpg",
            flip: false,
          },
          {
            id: 8,
            img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0FIYtMalyN8SvKaKM-A_uNheLGPgs9sWxi5Hdk31koQUX_NMJdceuqePeMxg9Ew2JImhCgEJaAjf7_qLJzzIYb-ptYLnRQW7am7AqHoAcd9IcpFhLd69oDnIlBioxPYO1CtYMsBRLf1ZhNkBbdNwOJ7KlgYts9ny17eFaRaskI1Txx7qIeV-7OIYZ/s1600/al-ahly-update-logo%20%282%29.jpg",
            flip: false,
          },
          {
            id: 0,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jcMhOPMjOI_6BC1XhNqswHsE-S2xtWFNew&usqp=CAU",
            flip: false,
          },
          {
            id: 12,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jcMhOPMjOI_6BC1XhNqswHsE-S2xtWFNew&usqp=CAU",
            flip: false,
          },
          {
            id: 444,
            img: "https://yt3.googleusercontent.com/y4imsDnCbOS_La1f3H8u0YLh-XV6ZtSpy5FRgn7DRyAei5-dGWeDvpVn7grr6sRqE_DcmjCw1Q=s900-c-k-c0x00ffffff-no-rj",
            flip: false,
          },
          {
            id: 111,
            img: "https://yt3.googleusercontent.com/y4imsDnCbOS_La1f3H8u0YLh-XV6ZtSpy5FRgn7DRyAei5-dGWeDvpVn7grr6sRqE_DcmjCw1Q=s900-c-k-c0x00ffffff-no-rj",
            flip: false,
          },
    
          {
            id: 1111,
            img: "https://5alfiat.com/wp-content/uploads/2023/02/%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9-%D9%84%D9%84%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84-15.jpeg",
            flip: false,
          },
          {
            id: 231,
            img: "https://5alfiat.com/wp-content/uploads/2023/02/%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9-%D9%84%D9%84%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84-15.jpeg",
            flip: false,
          },
          {
            id: 1231,
            img: "https://saudia9.com/wp-content/uploads/2020/09/%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9.jpg",
            flip: false,
          },
          {
            id: 131,
            img: "https://saudia9.com/wp-content/uploads/2020/09/%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9.jpg",
            flip: false,
          },
          {
            id: 531,
            img: "https://1.bp.blogspot.com/--_sEje9RnwI/XdUaEehUN6I/AAAAAAAAAL4/BcMJxxNuWjAH8ePz4lIAme0QZK_oFK53wCLcBGAsYHQ/s1600/1.jpg",
            flip: false,
          },
          {
            id: 31,
            img: "https://1.bp.blogspot.com/--_sEje9RnwI/XdUaEehUN6I/AAAAAAAAAL4/BcMJxxNuWjAH8ePz4lIAme0QZK_oFK53wCLcBGAsYHQ/s1600/1.jpg",
            flip: false,
          },
        ]
      : level === "3"
      ? [
          {
            id: 1,
            img: "https://upload.wikimedia.org/wikipedia/ar/b/be/Ismaily-Club-Logo.png",
            flip: false,
          },
          {
            id: 2,
            img: "https://upload.wikimedia.org/wikipedia/ar/b/be/Ismaily-Club-Logo.png",
            flip: false,
          },
          {
            id: 3,
            img: "https://i.pinimg.com/736x/e7/83/4f/e7834fb6fd4f1230f474bbdacda301de.jpg",
            flip: false,
          },
          {
            id: 4,
            img: "https://i.pinimg.com/736x/e7/83/4f/e7834fb6fd4f1230f474bbdacda301de.jpg",
            flip: false,
          },
          {
            id: 5,
            img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0FIYtMalyN8SvKaKM-A_uNheLGPgs9sWxi5Hdk31koQUX_NMJdceuqePeMxg9Ew2JImhCgEJaAjf7_qLJzzIYb-ptYLnRQW7am7AqHoAcd9IcpFhLd69oDnIlBioxPYO1CtYMsBRLf1ZhNkBbdNwOJ7KlgYts9ny17eFaRaskI1Txx7qIeV-7OIYZ/s1600/al-ahly-update-logo%20%282%29.jpg",
            flip: false,
          },
          {
            id: 8,
            img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0FIYtMalyN8SvKaKM-A_uNheLGPgs9sWxi5Hdk31koQUX_NMJdceuqePeMxg9Ew2JImhCgEJaAjf7_qLJzzIYb-ptYLnRQW7am7AqHoAcd9IcpFhLd69oDnIlBioxPYO1CtYMsBRLf1ZhNkBbdNwOJ7KlgYts9ny17eFaRaskI1Txx7qIeV-7OIYZ/s1600/al-ahly-update-logo%20%282%29.jpg",
            flip: false,
          },
          {
            id: 0,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jcMhOPMjOI_6BC1XhNqswHsE-S2xtWFNew&usqp=CAU",
            flip: false,
          },
          {
            id: 12,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jcMhOPMjOI_6BC1XhNqswHsE-S2xtWFNew&usqp=CAU",
            flip: false,
          },
          {
            id: 444,
            img: "https://yt3.googleusercontent.com/y4imsDnCbOS_La1f3H8u0YLh-XV6ZtSpy5FRgn7DRyAei5-dGWeDvpVn7grr6sRqE_DcmjCw1Q=s900-c-k-c0x00ffffff-no-rj",
            flip: false,
          },
          {
            id: 111,
            img: "https://yt3.googleusercontent.com/y4imsDnCbOS_La1f3H8u0YLh-XV6ZtSpy5FRgn7DRyAei5-dGWeDvpVn7grr6sRqE_DcmjCw1Q=s900-c-k-c0x00ffffff-no-rj",
            flip: false,
          },
    
          {
            id: 1111,
            img: "https://5alfiat.com/wp-content/uploads/2023/02/%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9-%D9%84%D9%84%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84-15.jpeg",
            flip: false,
          },
          {
            id: 231,
            img: "https://5alfiat.com/wp-content/uploads/2023/02/%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9-%D9%84%D9%84%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84-15.jpeg",
            flip: false,
          },
          {
            id: 1231,
            img: "https://saudia9.com/wp-content/uploads/2020/09/%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9.jpg",
            flip: false,
          },
          {
            id: 131,
            img: "https://saudia9.com/wp-content/uploads/2020/09/%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9.jpg",
            flip: false,
          },
          {
            id: 531,
            img: "https://1.bp.blogspot.com/--_sEje9RnwI/XdUaEehUN6I/AAAAAAAAAL4/BcMJxxNuWjAH8ePz4lIAme0QZK_oFK53wCLcBGAsYHQ/s1600/1.jpg",
            flip: false,
          },
          {
            id: 31,
            img: "https://1.bp.blogspot.com/--_sEje9RnwI/XdUaEehUN6I/AAAAAAAAAL4/BcMJxxNuWjAH8ePz4lIAme0QZK_oFK53wCLcBGAsYHQ/s1600/1.jpg",
            flip: false,
          },
          {
            id: 731,
            img: "https://www.oniriapictures.com/wp-content/uploads/2023/01/D8AED984D981D98AD8A7D8AA-D8A7D8B3D984D8A7D985D98AD8A9-2.png",
            flip: false,
          },
          {
            id: 1311,
            img: "https://www.oniriapictures.com/wp-content/uploads/2023/01/D8AED984D981D98AD8A7D8AA-D8A7D8B3D984D8A7D985D98AD8A9-2.png",
            flip: false,
          },
          {
            id: 146,
            img: "https://wordss.cc/wp-content/uploads/2021/02/2422.jpg",
            flip: false,
          },
          {
            id: 1446,
            img: "https://wordss.cc/wp-content/uploads/2021/02/2422.jpg",
            flip: false,
          },
          {
            id: 555,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6RIiZV99a7FkHPcK8YCmS06HRyGXly-Ou_g&usqp=CAU",
            flip: false,
          },
          {
            id: 1046,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6RIiZV99a7FkHPcK8YCmS06HRyGXly-Ou_g&usqp=CAU",
            flip: false,
          },
        ]
      : ""
      return data.sort((a,b) => a.id - b.id)
    })
  }
  return (
    <ImgsContext.Provider
      value={{ hData, handleFlip, handleAgain, setLevel, level , handleSetLevel , setAllData }}
    >
      {children}
    </ImgsContext.Provider>
  );
};
