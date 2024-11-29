import { ImageTextContainerLandscape, ImgBoxLandscape, ImgContentLandscape, TextLandscape } from "./style";

import Banner03 from '../../assets/banner_03.jpg';

export default function ImageTextLandscape() {
    return (
        <>
            <ImageTextContainerLandscape>
                <ImgContentLandscape>
                    <ImgBoxLandscape
                        alt="Foto Pastor Junior e Victoria Batista"
                        src={Banner03} // Substitua pelo caminho da imagem
                    />
                </ImgContentLandscape>

                <TextLandscape>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure nobis
                        officia totam quos qui illum praesentium saepe! Eius aperiam quaerat
                        quibusdam iste dolorum blanditiis similique, quisquam amet,
                        consequatur laboriosam minima. Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Iure nobis officia totam quos qui illum praesentium
                        saepe! Eius aperiam quaerat quibusdam iste dolorum blanditiis
                        similique, quisquam amet, consequatur laboriosam minima. Lorem, ipsum
                        dolor sit amet consectetur adipisicing elit. Iure nobis officia totam
                        quos qui illum praesentium saepe! Eius aperiam quaerat quibusdam iste
                        dolorum blanditiis similique, quisquam amet, consequatur laboriosam
                        minima.
                    </p>
                </TextLandscape>
            </ImageTextContainerLandscape>

        </>
    )
}