import React, { useRef } from 'react';
import PropTypes from "prop-types";
import { useReactToPrint } from 'react-to-print';

import { Col } from "react-bootstrap";
import Image from "components/Image";
import Icon from "components/Icon";

import "./FormItem.scss";

const FormItem = ({
  imageFileName,
  imageAlt,
  header,
  subheader,
}) => {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  return (
    <>
      <Col md={4} className="portfolio-item" >
        <a
          role="button"
          tabIndex={-1}
          className="portfolio-link"
          data-toggle="modal"
          portfolio-link ref={componentRef}
          onClick={handlePrint}
        >
          <Image
            className="img-fluid"
            fileName={imageFileName}
            alt={imageAlt || header || subheader}
          />

          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <Icon iconName="PlusIcon" size="2x" />
            </div>
          </div>
        </a>
        <div className="portfolio-caption">
          <h4>{header}</h4>
          {subheader ? <p className="text-muted">{subheader}</p> : null}
        </div>
      </Col>
    </>
  );
};

FormItem.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
};

FormItem.defaultProps = {
  imageAlt: "",
  subheader: "",
};

export default FormItem;
