import React from "react";
const mainStyle = {
  float: "left",
  width: "66%"
};
const articleStyle = {
  borderBottom: "1px solid #ddd",
  margin: "3em 0",
  paddingBottom: "1.5em"
};
const moreStyle = {
  fontWeight: "bold",
  textAlign: "right"
};

const Article = () => {
  return (
    <div style={mainStyle}>
      <article style={articleStyle}>
        <h3>11/12/20</h3>
        <h2>
          <p>On the Street in Brooklyn</p>
        </h2>
        <img src="img1.png" alt="fashion stuff" />
        <p>
          <span style={{ fontSize: "5.5em" }}>C</span>ray culpa stumptown,
          flexitarian ex Odd Future do fugiat Wes Anderson proident 3 wolf moon
          officia bitters small batch. Et consequat do, nulla you probably
          haven’t heard of them High Life scenester. Vinyl fugiat High Life,
          kogi do VHS in aliqua lo-fi leggings gentrify Neutra tumblr. Odio
          vegan PBR, Marfa forage blue bottle try-hard readymade meggings retro
          delectus Echo Park. Ugh consectetur farm-to-table forage, laboris blue
          bottle McSweeney’s tattooed excepteur yr. Magna ut Schlitz
          flexitarian, vinyl craft beer proident yr forage 8-bit ethical
          sustainable placeat retro. Officia pickled beard, adipisicing
          gluten-free sint craft beer quis thundercats id 3 wolf moon fashion
          axe.
        </p>
        <p style={moreStyle}>
          <a href="#">Continues...</a>
        </p>
      </article>
      <article style={articleStyle}>
        <h3>11/11/20</h3>
        <h2>
          <p>Vintage in Vogue</p>
        </h2>
        <img src="img2.png" alt="fashion stuff" />
        <p>
          {" "}
          <span style={{ fontSize: "5.5em" }}>S</span>elfies sunt Tumblr,
          delectus small batch DIY umami sint. Polaroid chambray selfies
          McSweeney's Cosby sweater, Pitchfork tattooed assumenda Wes Anderson
          Blue Bottle twee Carles ennui. Nisi locavore fugiat sapiente salvia
          aliqua. Shoreditch kogi exercitation fashion axe. Wolf semiotics
          Pinterest, laboris quis master cleanse tousled small batch street art
          bespoke fingerstache dreamcatcher ethical labore. Dreamcatcher iPhone
          typewriter, tote bag four loko fanny pack master cleanse organic PBR
          reprehenderit actually. Craft beer drinking vinegar wayfarers, pork
          belly narwhal pariatur polaroid cupidatat in 8-bit distillery anim
          literally.
        </p>
        <p style={moreStyle}>
          <a href="#">Continues...</a>
        </p>
      </article>
      <nav>
        <nav>
          <a href="index.html">Home</a>

          <a href="#">Women’s</a>

          <a href="#">Men’s</a>

          <a href="#">On the Street</a>

          <a href="#">The Catwalk</a>

          <a href="#">AdWatch</a>

          <a href="#">About</a>

          <a href="#">Tips</a>
        </nav>
      </nav>
    </div>
  );
};

export default Article;
