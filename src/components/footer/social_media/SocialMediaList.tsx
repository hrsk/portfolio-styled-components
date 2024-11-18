import styled from "styled-components";
import React from "react";
import {SocialMediaItem} from "./SocialMediaItem";
import {socialMediaItems} from "./SocialMediaItems";

export const SocialMediaList = () => {
    return (
        <SocialMediaListWrapper>
            {
                socialMediaItems.map(socialItem => <SocialMediaItem key={socialItem.id}
                                                                    title={socialItem.title}
                                                                    link={socialItem.link}/>)
            }
        </SocialMediaListWrapper>
    )
}

const SocialMediaListWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    height: 24px;
    column-gap: 25px;
    right: 0;
`