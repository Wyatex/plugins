use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct GenSvgElement {
  pub path: Option<String>,
  pub fill: Option<String>,
  pub stroke: Option<String>,
  pub stroke_width: Option<String>,
  pub width: Option<String>,
  pub height: Option<String>,
  pub class: Option<String>,
  pub style: Option<String>,
  pub scale: Option<f32>,
}

impl GenSvgElement {
  pub fn new(config: GenSvgElement) -> Self {
    GenSvgElement { ..config }
  }

  pub fn apply_to_svg(&self) -> String {
    let mut svg = String::from("<svg");
    let attributes = [
      self.fill.as_ref().map(|v| format!(r#" fill="{}""#, v)),
      self.stroke.as_ref().map(|v| format!(r#" stroke="{}""#, v)),
      self
        .stroke_width
        .as_ref()
        .map(|v| format!(r#" stroke-width="{}""#, v)),
      self.width.clone().map(|v| format!(r#" width="{}""#, v)),
      self.height.clone().map(|v| format!(r#" height="{}""#, v)),
      self.class.as_ref().map(|v| format!(r#" class="{}""#, v)),
      self.style.as_ref().map(|v| format!(r#" style="{}""#, v)),
      self.scale.map(|v| format!(r#" transform="scale({})""#, v)),
    ];

    for attr in attributes.iter().flatten() {
      svg.push_str(attr);
    }

    if let Some(path) = &self.path {
      svg.push_str(&format!(r#">{}</path>"#, path));
    }
    svg.push_str("</svg>");
    svg
  }
}