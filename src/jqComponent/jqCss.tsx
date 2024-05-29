import $ from "jquery";
import "../App";

const JqCss = () => {
  $(".calc-bg").css({
    background: "rgb(132, 132, 132)",
    padding: "1.2rem",
    borderRadius: "8px",
    boxShadow: "10px 10px 10px black",
    marginTop: "20px",
  });

  $(".label-input").css({
    display: "flex",
    flexDirection: "column",
    padding: "0.3rem",
  });

  $(".label-input label").css({
    fontWeight: "700",
    display: "flex",
    flexDiraction: "flex-start",
  });

  $(".btns").css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "8px",
  });

  $("input").css({
    border: "none",
    padding: "10px",
    margin: "5px 0",
    background: "rgb(240, 240, 243)",
    borderRadius: "8px",
  });

  $("#vat-percentage, #service-charge").css("color", "rgb(90, 20, 201");

  $(".link").css({
    position: "absolute",
    bottom: "30px",
    left: "30px",
  });

  $("a").css({ textDecoration: "none" });
};

export default JqCss;
