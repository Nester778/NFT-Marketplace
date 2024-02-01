import "./connectWalletBtn.css";

export default function ConnectWalletBtn(prop) {
    return (
        <a href="#!" className="ConnectWallet__btn">
            <img src={prop.infoConn.img} alt="" />
            <h5>{prop.infoConn.name}</h5>
        </a>
    )
}