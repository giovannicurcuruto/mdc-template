import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialMedia } from "./style";
import { FooterSocialMedia } from "../../types/Comuns/footer_social_media";
import { useEffect, useState } from "react";
import axios from "axios";
import { AuthDataInfo } from "../../utils/auth";

type ApiResponse = {
    success: boolean;
    data: [ FooterSocialMedia]
}


export default function SocialMediaComponent() {
    const [socialMedia, setSocialMedia] = useState<FooterSocialMedia[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<ApiResponse>(
                    AuthDataInfo.URL + "rest.php?class=UtilService&method=getSocialMediaFooterInfo",
                    {
                        headers: {
                            Authorization: AuthDataInfo.TOKEN,
                        }
                    }
                );
                console.log(response.data)
                if (response.data.success) {
                    const socialMediaData = response.data.data;
                    
                    setSocialMedia(socialMediaData);
                    

                } else {
                    console.error("Erro ao carregar os dados da API");
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.error("Erro Axios:", error.response?.data || error.message);
                } else {
                    console.error("Erro inesperado:", error);
                }
            }
        };

        fetchData();        
        

    }, [])

    //console.log(socialMedia[0]);

    return (
        <>
            <SocialMedia>
                <a href={socialMedia[1]?.links} target='_blank'>
                    <FontAwesomeIcon icon={['fab', 'soundcloud']} />
                </a>
            </SocialMedia>
            <SocialMedia>
                <a href={socialMedia[3]?.links} target='_blank'>
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                </a>
            </SocialMedia>
            <SocialMedia>
                <a href={socialMedia[2]?.links} target='_blank'>
                    <FontAwesomeIcon icon={['fab', 'youtube']} />
                </a>
            </SocialMedia>
            <SocialMedia>
                <a href={socialMedia[0]?.links} target='_blank'>
                    <FontAwesomeIcon icon={['fab', 'spotify']} />
                </a>
            </SocialMedia>
            <SocialMedia>
                <a href={socialMedia[1]?.links} target='_blank'>
                    <FontAwesomeIcon icon={['fab', 'soundcloud']} />
                </a>
            </SocialMedia>


        </>
    )
}