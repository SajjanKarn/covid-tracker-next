import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h5>
        Made with ♥ by Sajjan - {new Date().getFullYear()}
        <sup>&copy;</sup>
      </h5>
      {/* <p>Developer: <a href="https://instagram.com/sajjan_404" target="_blank" className={`btn btn-success ${styles.btn_dev}`}>Sajjan</a></p> */}
    </footer>
  );
}
