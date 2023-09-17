import { createContext, useState } from "react";

export const ImgsContext = createContext();

export const ImgsProvider = ({ children }) => {
  const olddata = [
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
  ];
  const [hData, setHData] = useState(olddata.sort((a,b) => {
    return a.id - b.id
  }));
  const [saveData , setSaveData] = useState(hData)
  const handleFlip = (id) => {
    const hh = [...hData]
    const newData = hData.map((el) => {
      if (el.id == id) {
        return { ...el, flip: !el.flip };
      }
      return el;
    });
    setHData((d) => {
      return [...newData];
    });
    setTimeout(() => checkSimilars(newData , hh) , 500);
  };
  const checkSimilars = (data , hh) => {
    const newOne = data.filter(d => d.flip)
    if (newOne.length === 2) {
      if (newOne[0].img === newOne[1].img) {
        setHData(d => {
          return d.filter(d => d != newOne[0] && d != newOne[1]);
        })
        setSaveData(d => {
          return d.filter(d => d != newOne[0] && d != newOne[1]);
        })
      }
      else {
        const dataN = [...hh]
        setHData(d => {
          return dataN.map(el => {
            return {...el , flip : false}
          })
        }
        );
      }
    }
  }
  const handleAgain = () => {
    setHData(olddata)
    setSaveData(olddata)
  }
  return (
    <ImgsContext.Provider value={{ hData, handleFlip , handleAgain }}>
      {children}
    </ImgsContext.Provider>
  );
};
