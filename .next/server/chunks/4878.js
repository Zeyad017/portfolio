"use strict";
exports.id = 4878;
exports.ids = [4878];
exports.modules = {

/***/ 7266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ about_us5)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/common/aboutSkillsProgress.js
const aboutSkillsProgress = (skillsEl, progresEl, sectionEl) => {
  let skillInAbout = skillsEl;

  if (skillInAbout) {
    window.addEventListener("scroll", () => {
      progresEl.forEach(item => {
        let myVal = item.getAttribute("data-value");

        if (window.pageYOffset > sectionEl.offsetTop - 200) {
          item.style.width = myVal;
        }
      });
    });
  }
};

/* harmony default export */ const common_aboutSkillsProgress = (aboutSkillsProgress);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/About-us5/about-us5.jsx
/* eslint-disable @next/next/no-img-element */





const AboutUs5 = () => {
  external_react_default().useEffect(() => {
    common_aboutSkillsProgress(document.querySelector(".about-cr .skills-box"), document.querySelectorAll(".skill-progress .progres"), document.querySelector(".about-cr"));
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "about-cr",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container-fluid",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 img md-mb50",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/img/intro/4.jpg",
            alt: ""
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-5 valign",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "cont full-width",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "color-font",
              children: "Generalist Designer"
            }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
              className: "co-tit mb-15",
              children: "I help to create visual strategies."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "These are the tools I use to achieve successful visual communication."
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "skills-box mt-40",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "skill-item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                  className: "fz-14 mb-15",
                  children: "Cinema 4D"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "skill-progress",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "progres",
                    "data-value": "70%"
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "skill-item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                  className: "fz-14 mb-15",
                  children: "Adobe Illustrator"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "skill-progress",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "progres",
                    "data-value": "80%"
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "skill-item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                  className: "fz-14 mb-15",
                  children: "Adobe Photoshop"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "skill-progress",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "progres",
                    "data-value": "80%"
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "skill-item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                  className: "fz-14 mb-15",
                  children: "Adobe Premier Pro"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "skill-progress",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "progres",
                    "data-value": "65%"
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "skill-item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                  className: "fz-14 mb-15",
                  children: "Apps Development"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "skill-progress",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "progres",
                    "data-value": "80%"
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "skill-item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                  className: "fz-14 mb-15",
                  children: "Z Brush"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "skill-progress",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "progres",
                    "data-value": "60%"
                  })
                })]
              })]
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const about_us5 = (AboutUs5);

/***/ }),

/***/ 7564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2589);
/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable @next/next/no-img-element */





const FreelancreIntro = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("header", {
    className: "freelancre valign",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-4",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "img",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
              src: "/img/hero.jpg",
              alt: ""
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-8 valign",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "cont",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h1", {
              className: "cd-headline clip",
              children: ["Welcome, My name is Zeyad Haytham and I am powered by creative thinking to make outstanding ", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                style: {
                  fontSize: "35px",
                  lineHeight: "49px"
                },
                className: "cd-words-wrapper",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((typewriter_effect__WEBPACK_IMPORTED_MODULE_1___default()), {
                  options: {
                    wrapperClassName: "color-font fw-600",
                    strings: ["Visuals", "Designs", "Artworks", "3D Renders"],
                    autoStart: true,
                    loop: true
                  },
                  loop: true,
                  onInit: typewriter => {
                    typewriter;
                  }
                })
              })]
            })
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "states",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
            className: "flex",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
              className: "flex",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: "numb valign",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
                  children: "2"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: "text valign",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                  children: ["Years ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("br", {}), " Of Experience"]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
              className: "flex",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: "numb valign",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
                  children: "63"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: "text valign",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                  children: ["Projects Completed ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("br", {})]
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
              className: "mail-us",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                href: "mailto:your@email.com?subject=Subject",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "flex",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "text valign",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                      className: "full-width",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                        children: "Get In Touch"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
                        children: "zeyad.haytham017@gmail.com"
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "mail-icon",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                      className: "icon-box",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                        className: "icon color-font pe-7s-mail"
                      })
                    })
                  })]
                })
              })
            })]
          })
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "line bottom left"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FreelancreIntro);

/***/ }),

/***/ 4738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_sections_features_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3473);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Services5 = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    className: "services box lficon section-padding position-re",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-8 col-md-10",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "sec-head  text-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
              className: "wow fadeIn",
              "data-wow-delay": ".5s",
              children: "Highlights"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
              className: "wow color-font",
              children: "I am a multidisciplinary visual designer and artist"
            })]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "row",
        children: _data_sections_features_json__WEBPACK_IMPORTED_MODULE_1__.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-6 wow fadeInLeft",
          "data-wow-delay": index == 0 ? ".5s" : index == 1 ? ".7s" : index === 2 ? ".9s" : ".5s",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "item-box no-curve",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                className: `icon color-font ${item.icon}`
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "cont",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
                children: item.title
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                children: item.content
              })]
            })]
          })
        }, item.id))
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "line bottom right"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services5);

/***/ }),

/***/ 2368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _common_initIsotope__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5032);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable @next/next/no-img-element */






const WorksStyle4 = () => {
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    setTimeout(() => {
      (0,_common_initIsotope__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    }, 1000);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    className: "portfolio-frl section-padding pb-70",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-8 col-md-10",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "sec-head  text-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
              className: "wow fadeIn",
              "data-wow-delay": ".5s",
              children: "Portfolio"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h3", {
              className: "wow color-font",
              children: ["My Recent Work & ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("br", {}), " Some Past Projects."]
            })]
          })
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "filtering col-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "filter wow fadeIn",
            "data-wow-delay": ".5s",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              "data-filter": "*",
              className: "active",
              children: "All"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              "data-filter": ".graphic",
              children: "Graphic Images"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              "data-filter": ".videos",
              children: "Videos"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              "data-filter": ".creative",
              children: "Creative"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "gallery full-width",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "col-md-6 items graphic lg-mr wow fadeInUp",
            "data-wow-delay": ".4s",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "item-img",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "cont",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
                  children: "Magazine Cover"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                  children: "Personal training project"
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: `/project-details2/project-details2-dark`,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
                  className: "rota",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
                    src: "/img/portfolio/freelancer/1.jpg",
                    alt: "image"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: "tags",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/works2/works2-dark",
                    children: "App"
                  })
                })
              })]
            })
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorksStyle4);

/***/ }),

/***/ 3473:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"icon":"pe-7s-paint-bucket","title":"3D Design","content":"Product based concepts, models, animation and directing stunning renders."},{"id":2,"icon":"pe-7s-phone","title":"Graphic Design","content":"Posters, art covers and billboard designs."},{"id":3,"icon":"pe-7s-display1","title":"Video Editting","content":"Sequencing, directing, editting and color correction."},{"id":4,"icon":"pe-7s-diskette","title":"Music Visuals","content":"Stage set visuals for performers."}]');

/***/ })

};
;