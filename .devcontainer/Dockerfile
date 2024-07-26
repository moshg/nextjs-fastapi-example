FROM mcr.microsoft.com/devcontainers/javascript-node:20
USER node
# Install Rye
RUN curl -sSf https://rye.astral.sh/get | RYE_INSTALL_OPTION="--yes" bash
RUN echo 'source "$HOME/.rye/env"' >> ~/.profile && echo 'source "$HOME/.rye/env"' >> ~/.zprofile

