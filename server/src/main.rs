use axum::{
    routing::{get},
    Router,
};

const PORT: i32 = 4567;

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(|| async { "Hello, World!" }));

    let listener = tokio::net::TcpListener::bind(format!("0.0.0.0:{}",PORT)).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
