import { LGOverlays, LGHeader, LGFooter } from "./LGcom";

export const LGcomLayout = (props) => {
  return (
    <div className="iw_viewport-wrapper">
      <LGOverlays />
      <div className="container-fluid iw_section">
        <div className="row iw_row iw_stretch">
          <div className="iw_columns col-lg-12">
            <div className="iw_component">
              <LGHeader />
            </div>
          </div>
        </div>
      </div>
      <div className="iw_section">{props.children}</div>

      <div className="container-fluid iw_section">
        <div className="row iw_row iw_stretch">
          <div className="iw_columns col-lg-12">
            <div className="iw_component">
              <div className="component-wrap  zero-top">
                <LGFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
