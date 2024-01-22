import { pokemonColor } from '../constants';

export const Wrapper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%"
};

export const InnerWrapper = (type: string) => {
  return {
    background: pokemonColor[type] ?? '#fff',
    fontSize: "18px",
    borderRadius: "10px",
    width: "30%",
    padding: "4.4rem",
    margin: "1rem",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: "60px"
  }
};

export const Content = {
  backgroundColor: "#fff",
  opasity: "0.5",
  borderRadius: "10px",
  width: "100%",
  padding: "20px",
  boxShadow: "inset 0 0 1em white, 0 0 2.5em white"
};

export const MainInfo = {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "15px 0"
};

export const ImageWrapper = {
  display: "flex",
  justifyContent: "center",
  img: {
    width: "100%",
    maxWidth: "200px"
  }
};

export const Order = {
  color: "#000"
};

export const NameText = {
  textAlign: "center",
  marginTop: "10px",
  fontSize: "40px",
  fontWeight: "600",
  textTransform: "capitalize",
  color: "#000"
};

export const TypeWrapper = {
  display: "flex",
  gap: "10px",
  justifyContent: "center"
};

export const TypeName = (type: string) => {
  return {
    display: "flex",
    backgroundColor: pokemonColor[type] ?? 'none',
    borderRadius: "10px",
    padding: "10px 20px",
    color: "#fff"
  }
};

export const DetailsWrapper = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "40px",
  padding: "0 40px"
};

export const SmallCardWrapper = {
  display: "grid",
  gridTemplateRows: "repeat(2, 1fr)",
  backgroundColor: "#fff",
  borderRadius: "10px",
  padding: "10px",
  textAlign: "center",
  gap: "10px",
  flexDirection: "column",
  maxHeight: "100px",
  minHeight: "100px"
};

export const Title = {
  fontSize: "15px",
  fontWeight: "600",
  color: "#000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "capitalize"
};

export const Data = {
  fontSize: "15px",
  color: "#000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};