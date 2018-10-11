import React from 'react';

import styled from 'styled-components';
import { MapPreview } from '../../components/MapPreview';
import { ProfileInfo } from '../../components/ProfileInfo';
import { ProfileGallerySlider } from '../../components/ProfileGallerySlider';
import { ProfileGalleryPicture } from '../../components/ProfileGallerySlider/ProfileGalleryPicture';
import { ImageCover } from '../../components/ImageConver';
import { page } from '../../hocs/page';

const Wrapper = styled.div`
    height: 100vh;

    @media (max-width: 700px) {
        height: 200vh;
    }
`;

const Container = styled.div`
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: row;
    align-self: stretch;
    font-size: 1.6rem;

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

const Col = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const Cell = styled.div`
    flex: ${props => props.weight || 1};
`;

const Profile = ({ user, history }) => (
    <Wrapper>
        {user ? (
            <Container>
                <Col>
                    <Cell weight={5}>
                        <ImageCover src="images/profile_pic.png" />
                    </Cell>
                    <Cell weight={4}>
                        <MapPreview src="images/map_preview.png" onClick={() => history.push('/map')} />
                    </Cell>
                </Col>
                <Col>
                    <Cell weight={5}>
                        <ProfileInfo
                            username={user.username}
                            distance={75}
                            favoritePlace="Tetuan"
                            visitedPlace="Coslada"
                        />
                    </Cell>
                    <Cell weight={5}>
                        <ProfileGallerySlider>
                            <ProfileGalleryPicture src="images/gallery_pic_1.png" />
                            <ProfileGalleryPicture src="images/gallery_pic_2.png" />
                            <ProfileGalleryPicture src="images/gallery_pic_3.png" />
                            <ProfileGalleryPicture src="images/gallery_pic_1.png" />
                            <ProfileGalleryPicture src="images/gallery_pic_2.png" />
                            <ProfileGalleryPicture src="images/gallery_pic_3.png" />
                            <ProfileGalleryPicture src="images/gallery_pic_1.png" />
                            <ProfileGalleryPicture src="images/gallery_pic_2.png" />
                            <ProfileGalleryPicture src="images/gallery_pic_3.png" />
                        </ProfileGallerySlider>
                    </Cell>
                </Col>
            </Container>
        ) : null}
    </Wrapper>
);

Profile.defaultProps = {};

Profile.propTypes = {};

export default page(Profile);
