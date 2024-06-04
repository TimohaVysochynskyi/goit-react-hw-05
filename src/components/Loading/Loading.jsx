import { ColorRing } from "react-loader-spinner";
import css from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={css.container}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#181818", "#333", "#000", "#222222", "#111"]}
      />
    </div>
  );
}
