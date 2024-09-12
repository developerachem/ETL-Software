import { useEffect } from "react";
import Container from "../../container/Container";

function BlogSingle() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <Container>
        <div className="w-full">
          <img
            src="https://static.wixstatic.com/media/84b06e_d4fd1bcc50d24af0984e62d07dcbcef1~mv2.png/v1/fill/w_980,h_560,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/84b06e_d4fd1bcc50d24af0984e62d07dcbcef1~mv2.png"
            alt=""
            className="mt-5 rounded h-[200px] sm:h-[350px] md:h-[450px] xl:h-[600px] w-full object-cover"
          />

          <div className="flex justify-between mb-3 mt-3">
            <div className="text-[14px] font-[font-500] text-gray-700">
              By John Doe
            </div>

            <div className="text-[14px] font-[font-500] text-gray-700">
              10 March, 2022
            </div>
          </div>

          <h1 className="font-[font-600] mt-5 text-[20px] md:text-[25px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
            architecto facere dolores modi ipsam itaque cum sed voluptatem
            ratione eveniet!
          </h1>

          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            suscipit minima tempora sequi aperiam quas qui aspernatur ullam
            consequatur nisi. Voluptate nobis excepturi nulla velit odit fuga,
            maiores hic suscipit. Earum iusto, voluptatem officiis ut in
            architecto perspiciatis amet laudantium dolorum laboriosam incidunt
            recusandae? Aspernatur adipisci nesciunt dolorum corporis
            perferendis! Repellendus optio impedit corporis sunt quod quos,
            recusandae, animi ipsam voluptatem voluptates natus beatae laborum
            hic veniam! Quo eos vero neque id! Quibusdam expedita inventore quod
            iste! Voluptates, est ratione possimus minus veniam impedit cum
            doloribus itaque culpa similique assumenda, corrupti rerum. Modi ea
            minus error cumque minima vitae! Quas quam, recusandae iste atque
            laboriosam doloribus odit, soluta voluptate hic illum ducimus
            asperiores id! Error magnam cumque deleniti similique at, eius
            cupiditate veritatis voluptatibus ut et sapiente reiciendis officiis
            mollitia, natus nulla aut, a exercitationem! Harum id assumenda
            quisquam molestiae similique quidem porro repudiandae necessitatibus
            perspiciatis nesciunt veritatis eveniet a iste ullam corrupti, cum
            tempore pariatur ratione sequi rerum amet eius voluptatum! Ipsa
            sequi pariatur minus, eum cumque voluptatem ullam, ipsam cum autem
            nulla temporibus repellendus. Distinctio iste in eaque unde vero
            omnis veritatis consectetur ad beatae neque, facilis impedit totam
            dolorem labore excepturi nostrum voluptatum doloribus, perspiciatis
            adipisci corporis provident sapiente. Deleniti, vero repudiandae
            quia excepturi maiores optio quos a officia soluta fugit asperiores
            laboriosam quibusdam ipsum voluptatem dicta temporibus sequi, fugiat
            molestiae. Alias minus amet facere officiis sint aperiam saepe rem
            impedit asperiores fugit explicabo voluptas, corrupti eveniet
            ducimus atque, nemo debitis beatae! Debitis similique, ratione
            praesentium quis sint recusandae officiis mollitia cumque odio quas,
            dolorum eos ipsam nesciunt! Vitae similique perspiciatis aspernatur
            sunt molestias aperiam maiores, ullam maxime, corrupti provident
            deserunt perferendis. Aperiam laborum ex doloremque repellendus sit
            distinctio iste? Harum minima, alias iste aspernatur accusamus
            voluptates officiis facere aut temporibus libero possimus eius
            ratione distinctio quae accusantium ea sed debitis perspiciatis
            rerum aperiam obcaecati maiores, suscipit dolore eligendi? Non
            possimus perferendis dolore illo soluta totam incidunt vero labore
            vel at, modi recusandae repellendus voluptatum eos, ullam sit nam
            enim ex. Vero repudiandae ut praesentium quaerat harum porro
            cupiditate natus autem placeat corporis inventore quae suscipit,
            exercitationem corrupti doloremque. Laudantium nam possimus totam
            laboriosam officiis soluta tenetur, natus eos quidem earum
            distinctio impedit architecto facere accusamus iusto nisi amet
            tempore dolorum? Sint fugiat harum et fuga sunt cumque dignissimos
            ipsa id alias? Saepe magnam est, dolore a accusamus animi quis
            perspiciatis qui sapiente sunt facilis ducimus porro itaque
            reiciendis dicta? Animi quas accusantium, quam voluptates suscipit
            tempora quidem nam ea ipsa dolorem facere, distinctio, corporis
            corrupti quae reiciendis. Dignissimos fugit aspernatur obcaecati
            architecto. Dicta reprehenderit aliquam molestias tempora
            exercitationem accusantium animi esse culpa. Cupiditate omnis dicta
            distinctio unde quis vel, debitis natus consequuntur quas possimus
            rerum doloribus nam dolores libero perspiciatis suscipit ad
            asperiores maxime soluta iste. Vel quam minus est repellendus ipsa
            deleniti a omnis non? Aut suscipit molestiae unde atque numquam
            dicta, hic, repellendus nobis tempore autem esse corporis, fuga
            nesciunt a voluptate dolorem delectus itaque minus! Nam laborum
            placeat inventore, consectetur qui cupiditate accusantium?
          </p>

          <div className="pt-[100px]"></div>
        </div>
      </Container>
    </div>
  );
}

export default BlogSingle;
