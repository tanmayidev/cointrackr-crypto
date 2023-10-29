function Join() {
    return (
      <>
        <section id="join" className="join-section">
          <div className="container">
            <div className="join-content">
              <img
                alt="coin_img"
                className="join-content__btc"
                src="/bitcoin.png"
              />
              <img
                alt="coin_img"
                className="join-content__eth"
                src="/ethereum.png"
              />
              <div className="join-content__text">
                <h2>
                  join us via <br /> <span>discord</span>
                </h2>
                <p>Invest and manage all your crypto at one place.</p>
                <a rel="noreferrer" target="_blank" href="https://discord.com/">
                  Join via Discord
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Join;
  