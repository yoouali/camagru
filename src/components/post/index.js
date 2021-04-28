import {useRef} from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Image from './image';

export default function Post({content}){
    console.log('content', content);
    /// header, image, action (like & comment icons), footer, comments

    return(
        <div className="rounded col-span-4 border bg-blue-lighter border-blue-primary mb-12">
          <Header username={content.username} />
          <Image src={content.imageSrc} caption={content.caption}/>
        </div>
    );
}

Post.propTypes = {
    content: PropTypes.shape({
        username: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
        docId: PropTypes.string.isRequired,
        userLinkedPhoto: PropTypes.bool.isRequired,
        likes: PropTypes.array.isRequired,
        comments: PropTypes.array.isRequired,
        dateCreated: PropTypes.number.isRequired,
        dateCreated: PropTypes.number.isRequired
    })
};