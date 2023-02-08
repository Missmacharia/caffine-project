import React from "react";
import "./Blog.css";
import blog1 from "../../image/blog1.webp";
import blog2 from "../../image/blog2.jpg";

const Blog = () => {
  return (
    <div className="blog_container">
      <div className="blog_details">
        <div className="image_blog">
          <img src={blog1} alt="" />
        </div>
        <div className="about_blog">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            non illo nihil iste similique, eos ipsam distinctio, quo modi
            dolorum autem maxime tempora harum vero! Assumenda error quaerat,
            id, veritatis doloremque commodi placeat, maxime natus animi
            accusantium sint culpa? Hic dolorem beatae illum inventore harum,
            repellat blanditiis dicta omnis quaerat. Quibusdam quis repellendus
            dicta id doloremque natus quaerat velit, eaque, possimus unde beatae
            totam corporis. Repudiandae, eligendi illo maiores laboriosam quasi
            non, veniam eius distinctio repellendus quam, hic iste earum
            suscipit! Alias totam molestias beatae voluptas ullam maxime.
            Officia explicabo tempora, vitae voluptatibus eos eveniet nisi nam
            vel perferendis corporis.
          </p>
          <button>Read more...</button>
        </div>
      </div>
      <div className="blog_details">
        <div className="about_blog">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            non illo nihil iste similique, eos ipsam distinctio, quo modi
            dolorum autem maxime tempora harum vero! Assumenda error quaerat,
            id, veritatis doloremque commodi placeat, maxime natus animi
            accusantium sint culpa? Hic dolorem beatae illum inventore harum,
            repellat blanditiis dicta omnis quaerat. Quibusdam quis repellendus
            dicta id doloremque natus quaerat velit, eaque, possimus unde beatae
            totam corporis. Repudiandae, eligendi illo maiores laboriosam quasi
            non, veniam eius distinctio repellendus quam, hic iste earum
            suscipit! Alias totam molestias beatae voluptas ullam maxime.
            Officia explicabo tempora, vitae voluptatibus eos eveniet nisi nam
            vel perferendis corporis.
          </p>
          <button>Read more...</button>
        </div>
        <div className="image_blog">
          <img src={blog2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
