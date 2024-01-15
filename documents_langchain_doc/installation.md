---
description: Official release
docsearch:docusaurus_tag: docs-default-current
docsearch:language: en
docsearch:version: current
docusaurus_locale: en
docusaurus_tag: docs-default-current
docusaurus_version: current
generator: Docusaurus v2.4.3
lang: en
title: Installation \| 🦜️🔗 Langchain
twitter:card: summary_large_image
twitter:image: "https://python.langchain.com/img/parrot-chainlink-icon.png"
viewport: width=device-width,initial-scale=1
---

::: {#__docusaurus}
::: {role="region" aria-label="Skip to main content"}
[Skip to main
content](installation.html#__docusaurus_skipToContent_fallback){.skipToContent_fXgn}
:::

::: navbar__inner
::: navbar__items
![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdib3g9IjAgMCAzMCAzMCIgYXJpYS1oaWRkZW49InRydWUiPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMiIgLz48L3N2Zz4=)

[**🦜️🔗
LangChain**](https://python.langchain.com/){.navbar__brand}[Docs](introduction.html){.navbar__item
.navbar__link}[Use
cases](https://python.langchain.com/docs/use_cases){.navbar__item
.navbar__link}[Integrations](https://python.langchain.com/docs/integrations/providers){.navbar__item
.navbar__link}[Guides](https://python.langchain.com/docs/guides/debugging){.navbar__item
.navbar__link}[API![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://api.python.langchain.com){.navbar__item
.navbar__link target="_blank" rel="noopener noreferrer"}

::: {.navbar__item .dropdown .dropdown--hoverable}
[More](installation.html#){.navbar__link aria-haspopup="true"
aria-expanded="false" role="button"}

-   [Versioning](https://python.langchain.com/docs/packages){.dropdown__link}
-   [Changelog](https://python.langchain.com/docs/changelog){.dropdown__link}
-   [Developer\'s
    guide](https://python.langchain.com/docs/contributing){.dropdown__link}
-   [Templates](https://python.langchain.com/docs/templates/){.dropdown__link}
-   [Cookbooks![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGFyaWEtaGlkZGVuPSJ0cnVlIiB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJpY29uRXh0ZXJuYWxMaW5rX25QSVUiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIxIDEzdjEwaC0yMXYtMTloMTJ2MmgtMTB2MTVoMTd2LThoMnptMy0xMmgtMTAuOTg4bDQuMDM1IDQtNi45NzcgNy4wNyAyLjgyOCAyLjgyOCA2Ljk3Ny03LjA3IDQuMTI1IDQuMTcydi0xMXoiIC8+PC9zdmc+){.iconExternalLink_nPIU}](https://github.com/langchain-ai/langchain/blob/master/cookbook/README.md){.dropdown__link
    target="_blank" rel="noopener noreferrer"}
-   [Tutorials](https://python.langchain.com/docs/additional_resources/tutorials){.dropdown__link}
-   [YouTube
    videos](https://python.langchain.com/docs/additional_resources/youtube){.dropdown__link}
:::
:::

::: {.navbar__items .navbar__items--right}
::: {.navbar__item .dropdown .dropdown--hoverable .dropdown--right}
[🦜️🔗](installation.html#){.navbar__link aria-haspopup="true"
aria-expanded="false" role="button"}

-   [LangSmith![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGFyaWEtaGlkZGVuPSJ0cnVlIiB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJpY29uRXh0ZXJuYWxMaW5rX25QSVUiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIxIDEzdjEwaC0yMXYtMTloMTJ2MmgtMTB2MTVoMTd2LThoMnptMy0xMmgtMTAuOTg4bDQuMDM1IDQtNi45NzcgNy4wNyAyLjgyOCAyLjgyOCA2Ljk3Ny03LjA3IDQuMTI1IDQuMTcydi0xMXoiIC8+PC9zdmc+){.iconExternalLink_nPIU}](https://smith.langchain.com){.dropdown__link
    target="_blank" rel="noopener noreferrer"}
-   [LangSmith
    Docs![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGFyaWEtaGlkZGVuPSJ0cnVlIiB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJpY29uRXh0ZXJuYWxMaW5rX25QSVUiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIxIDEzdjEwaC0yMXYtMTloMTJ2MmgtMTB2MTVoMTd2LThoMnptMy0xMmgtMTAuOTg4bDQuMDM1IDQtNi45NzcgNy4wNyAyLjgyOCAyLjgyOCA2Ljk3Ny03LjA3IDQuMTI1IDQuMTcydi0xMXoiIC8+PC9zdmc+){.iconExternalLink_nPIU}](https://docs.smith.langchain.com/){.dropdown__link
    target="_blank" rel="noopener noreferrer"}
-   [LangServe
    GitHub![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGFyaWEtaGlkZGVuPSJ0cnVlIiB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJpY29uRXh0ZXJuYWxMaW5rX25QSVUiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIxIDEzdjEwaC0yMXYtMTloMTJ2MmgtMTB2MTVoMTd2LThoMnptMy0xMmgtMTAuOTg4bDQuMDM1IDQtNi45NzcgNy4wNyAyLjgyOCAyLjgyOCA2Ljk3Ny03LjA3IDQuMTI1IDQuMTcydi0xMXoiIC8+PC9zdmc+){.iconExternalLink_nPIU}](https://github.com/langchain-ai/langserve){.dropdown__link
    target="_blank" rel="noopener noreferrer"}
-   [Templates
    GitHub![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGFyaWEtaGlkZGVuPSJ0cnVlIiB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJpY29uRXh0ZXJuYWxMaW5rX25QSVUiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIxIDEzdjEwaC0yMXYtMTloMTJ2MmgtMTB2MTVoMTd2LThoMnptMy0xMmgtMTAuOTg4bDQuMDM1IDQtNi45NzcgNy4wNyAyLjgyOCAyLjgyOCA2Ljk3Ny03LjA3IDQuMTI1IDQuMTcydi0xMXoiIC8+PC9zdmc+){.iconExternalLink_nPIU}](https://github.com/langchain-ai/langchain/tree/master/templates){.dropdown__link
    target="_blank" rel="noopener noreferrer"}
-   [Templates
    Hub![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGFyaWEtaGlkZGVuPSJ0cnVlIiB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJpY29uRXh0ZXJuYWxMaW5rX25QSVUiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIxIDEzdjEwaC0yMXYtMTloMTJ2MmgtMTB2MTVoMTd2LThoMnptMy0xMmgtMTAuOTg4bDQuMDM1IDQtNi45NzcgNy4wNyAyLjgyOCAyLjgyOCA2Ljk3Ny03LjA3IDQuMTI1IDQuMTcydi0xMXoiIC8+PC9zdmc+){.iconExternalLink_nPIU}](https://templates.langchain.com){.dropdown__link
    target="_blank" rel="noopener noreferrer"}
-   [LangChain
    Hub![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGFyaWEtaGlkZGVuPSJ0cnVlIiB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJpY29uRXh0ZXJuYWxMaW5rX25QSVUiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIxIDEzdjEwaC0yMXYtMTloMTJ2MmgtMTB2MTVoMTd2LThoMnptMy0xMmgtMTAuOTg4bDQuMDM1IDQtNi45NzcgNy4wNyAyLjgyOCAyLjgyOCA2Ljk3Ny03LjA3IDQuMTI1IDQuMTcydi0xMXoiIC8+PC9zdmc+){.iconExternalLink_nPIU}](https://smith.langchain.com/hub){.dropdown__link
    target="_blank" rel="noopener noreferrer"}
-   [JS/TS
    Docs![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGFyaWEtaGlkZGVuPSJ0cnVlIiB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJpY29uRXh0ZXJuYWxMaW5rX25QSVUiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIxIDEzdjEwaC0yMXYtMTloMTJ2MmgtMTB2MTVoMTd2LThoMnptMy0xMmgtMTAuOTg4bDQuMDM1IDQtNi45NzcgNy4wNyAyLjgyOCAyLjgyOCA2Ljk3Ny03LjA3IDQuMTI1IDQuMTcydi0xMXoiIC8+PC9zdmc+){.iconExternalLink_nPIU}](https://js.langchain.com){.dropdown__link
    target="_blank" rel="noopener noreferrer"}
:::

[Chat![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://chat.langchain.com){.navbar__item
.navbar__link target="_blank"
rel="noopener noreferrer"}[](https://github.com/langchain-ai/langchain){.navbar__item
.navbar__link .header-github-link target="_blank"
rel="noopener noreferrer" aria-label="GitHub repository"}

::: {.toggle_vylO .colorModeToggle_DEke}
![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgY2xhc3M9ImxpZ2h0VG9nZ2xlSWNvbl9weWhSIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiw5YzEuNjUsMCwzLDEuMzUsMywzcy0xLjM1LDMtMywzcy0zLTEuMzUtMy0zUzEwLjM1LDksMTIsOSBNMTIsN2MtMi43NiwwLTUsMi4yNC01LDVzMi4yNCw1LDUsNXM1LTIuMjQsNS01IFMxNC43Niw3LDEyLDdMMTIsN3ogTTIsMTNsMiwwYzAuNTUsMCwxLTAuNDUsMS0xcy0wLjQ1LTEtMS0xbC0yLDBjLTAuNTUsMC0xLDAuNDUtMSwxUzEuNDUsMTMsMiwxM3ogTTIwLDEzbDIsMGMwLjU1LDAsMS0wLjQ1LDEtMSBzLTAuNDUtMS0xLTFsLTIsMGMtMC41NSwwLTEsMC40NS0xLDFTMTkuNDUsMTMsMjAsMTN6IE0xMSwydjJjMCwwLjU1LDAuNDUsMSwxLDFzMS0wLjQ1LDEtMVYyYzAtMC41NS0wLjQ1LTEtMS0xUzExLDEuNDUsMTEsMnogTTExLDIwdjJjMCwwLjU1LDAuNDUsMSwxLDFzMS0wLjQ1LDEtMXYtMmMwLTAuNTUtMC40NS0xLTEtMUMxMS40NSwxOSwxMSwxOS40NSwxMSwyMHogTTUuOTksNC41OGMtMC4zOS0wLjM5LTEuMDMtMC4zOS0xLjQxLDAgYy0wLjM5LDAuMzktMC4zOSwxLjAzLDAsMS40MWwxLjA2LDEuMDZjMC4zOSwwLjM5LDEuMDMsMC4zOSwxLjQxLDBzMC4zOS0xLjAzLDAtMS40MUw1Ljk5LDQuNTh6IE0xOC4zNiwxNi45NSBjLTAuMzktMC4zOS0xLjAzLTAuMzktMS40MSwwYy0wLjM5LDAuMzktMC4zOSwxLjAzLDAsMS40MWwxLjA2LDEuMDZjMC4zOSwwLjM5LDEuMDMsMC4zOSwxLjQxLDBjMC4zOS0wLjM5LDAuMzktMS4wMywwLTEuNDEgTDE4LjM2LDE2Ljk1eiBNMTkuNDIsNS45OWMwLjM5LTAuMzksMC4zOS0xLjAzLDAtMS40MWMtMC4zOS0wLjM5LTEuMDMtMC4zOS0xLjQxLDBsLTEuMDYsMS4wNmMtMC4zOSwwLjM5LTAuMzksMS4wMywwLDEuNDEgczEuMDMsMC4zOSwxLjQxLDBMMTkuNDIsNS45OXogTTcuMDUsMTguMzZjMC4zOS0wLjM5LDAuMzktMS4wMywwLTEuNDFjLTAuMzktMC4zOS0xLjAzLTAuMzktMS40MSwwbC0xLjA2LDEuMDYgYy0wLjM5LDAuMzktMC4zOSwxLjAzLDAsMS40MXMxLjAzLDAuMzksMS40MSwwTDcuMDUsMTguMzZ6IiAvPjwvc3ZnPg==){.lightToggleIcon_pyhR}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgY2xhc3M9ImRhcmtUb2dnbGVJY29uX3dmZ1IiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTkuMzcsNS41MUM5LjE5LDYuMTUsOS4xLDYuODIsOS4xLDcuNWMwLDQuMDgsMy4zMiw3LjQsNy40LDcuNGMwLjY4LDAsMS4zNS0wLjA5LDEuOTktMC4yN0MxNy40NSwxNy4xOSwxNC45MywxOSwxMiwxOSBjLTMuODYsMC03LTMuMTQtNy03QzUsOS4wNyw2LjgxLDYuNTUsOS4zNyw1LjUxeiBNMTIsM2MtNC45NywwLTksNC4wMy05LDlzNC4wMyw5LDksOXM5LTQuMDMsOS05YzAtMC40Ni0wLjA0LTAuOTItMC4xLTEuMzYgYy0wLjk4LDEuMzctMi41OCwyLjI2LTQuNCwyLjI2Yy0yLjk4LDAtNS40LTIuNDItNS40LTUuNGMwLTEuODEsMC44OS0zLjQyLDIuMjYtNC40QzEyLjkyLDMuMDQsMTIuNDYsMywxMiwzTDEyLDN6IiAvPjwvc3ZnPg==){.darkToggleIcon_wfgR}
:::

::: searchBox_ZlJk
[![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGNsYXNzPSJEb2NTZWFyY2gtU2VhcmNoLUljb24iIHZpZXdib3g9IjAgMCAyMCAyMCI+PHBhdGggZD0iTTE0LjM4NiAxNC4zODZsNC4wODc3IDQuMDg3Ny00LjA4NzctNC4wODc3Yy0yLjk0MTggMi45NDE5LTcuNzExNSAyLjk0MTktMTAuNjUzMyAwLTIuOTQxOS0yLjk0MTgtMi45NDE5LTcuNzExNSAwLTEwLjY1MzMgMi45NDE4LTIuOTQxOSA3LjcxMTUtMi45NDE5IDEwLjY1MzMgMCAyLjk0MTkgMi45NDE4IDIuOTQxOSA3LjcxMTUgMCAxMC42NTMzeiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPjwvc3ZnPg==){.DocSearch-Search-Icon}[Search]{.DocSearch-Button-Placeholder}]{.DocSearch-Button-Container}[]{.DocSearch-Button-Keys}
:::
:::
:::

::: {.navbar-sidebar__backdrop role="presentation"}
:::

::: {#__docusaurus_skipToContent_fallback .main-wrapper .mainWrapper_z2l0 .docsWrapper_BCFX}
::: docPage__5DB
::: sidebarViewport_Xe31
::: sidebar_njMd
-   ::: menu__list-item-collapsible
    [Get
    started](https://python.langchain.com/docs/get_started){.menu__link
    .menu__link--active}
    :::

    -   [Introduction](introduction.html){.menu__link tabindex="0"}
    -   [Installation](installation.html){.menu__link
        .menu__link--active aria-current="page" tabindex="0"}
    -   [Quickstart](quickstart.html){.menu__link tabindex="0"}
    -   [Security](https://python.langchain.com/docs/security){.menu__link
        tabindex="0"}

-   ::: menu__list-item-collapsible
    [LangChain Expression
    Language](https://python.langchain.com/docs/expression_language/){.menu__link
    .menu__link--sublist aria-expanded="true"}
    :::

    -   [Get
        started](https://python.langchain.com/docs/expression_language/get_started){.menu__link
        tabindex="0"}

    -   [Why use
        LCEL](https://python.langchain.com/docs/expression_language/why){.menu__link
        tabindex="0"}

    -   [Interface](https://python.langchain.com/docs/expression_language/interface){.menu__link
        tabindex="0"}

    -   ::: menu__list-item-collapsible
        [How
        to](https://python.langchain.com/docs/expression_language/how_to/){.menu__link
        .menu__link--sublist aria-expanded="false" tabindex="0"}
        :::

    -   ::: menu__list-item-collapsible
        [Cookbook](https://python.langchain.com/docs/expression_language/cookbook/){.menu__link
        .menu__link--sublist aria-expanded="false" tabindex="0"}
        :::

    -   [LangChain Expression Language
        (LCEL)](https://python.langchain.com/docs/expression_language/){.menu__link
        tabindex="0"}

-   ::: menu__list-item-collapsible
    [Modules](https://python.langchain.com/docs/modules/){.menu__link
    .menu__link--sublist aria-expanded="true"}
    :::

    -   ::: menu__list-item-collapsible
        [Model
        I/O](https://python.langchain.com/docs/modules/model_io/){.menu__link
        .menu__link--sublist aria-expanded="false" tabindex="0"}
        :::

    -   ::: menu__list-item-collapsible
        [Retrieval](https://python.langchain.com/docs/modules/data_connection/){.menu__link
        .menu__link--sublist aria-expanded="false" tabindex="0"}
        :::

    -   ::: menu__list-item-collapsible
        [Agents](https://python.langchain.com/docs/modules/agents/){.menu__link
        .menu__link--sublist aria-expanded="false" tabindex="0"}
        :::

    -   [Chains](https://python.langchain.com/docs/modules/chains){.menu__link
        tabindex="0"}

    -   ::: menu__list-item-collapsible
        [More](https://python.langchain.com/docs/modules/memory/){.menu__link
        .menu__link--sublist .menu__link--sublist-caret
        aria-expanded="false" tabindex="0"}
        :::

-   [LangServe](https://python.langchain.com/docs/langserve){.menu__link}

-   ::: menu__list-item-collapsible
    [LangSmith](https://python.langchain.com/docs/langsmith/){.menu__link
    .menu__link--sublist aria-expanded="false"}
    :::

-   [LangGraph](https://python.langchain.com/docs/langgraph){.menu__link}

![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0iY29sbGFwc2VTaWRlYmFyQnV0dG9uSWNvbl9rdjBfIj48ZyBmaWxsPSIjN2E3YTdhIj48cGF0aCBkPSJNOS45OTIgMTAuMDIzYzAgLjItLjA2Mi4zOTktLjE3Mi41NDdsLTQuOTk2IDcuNDkyYS45ODIuOTgyIDAgMDEtLjgyOC40NTRIMWMtLjU1IDAtMS0uNDUzLTEtMSAwLS4yLjA1OS0uNDAzLjE2OC0uNTUxbDQuNjI5LTYuOTQyTC4xNjggMy4wNzhBLjkzOS45MzkgMCAwMTAgMi41MjhjMC0uNTQ4LjQ1LS45OTcgMS0uOTk3aDIuOTk2Yy4zNTIgMCAuNjQ5LjE4LjgyOC40NUw5LjgyIDkuNDcyYy4xMS4xNDguMTcyLjM0Ny4xNzIuNTV6bTAgMCIgLz48cGF0aCBkPSJNMTkuOTggMTAuMDIzYzAgLjItLjA1OC4zOTktLjE2OC41NDdsLTQuOTk2IDcuNDkyYS45ODcuOTg3IDAgMDEtLjgyOC40NTRoLTNjLS41NDcgMC0uOTk2LS40NTMtLjk5Ni0xIDAtLjIuMDU5LS40MDMuMTY4LS41NTFsNC42MjUtNi45NDItNC42MjUtNi45NDVhLjkzOS45MzkgMCAwMS0uMTY4LS41NSAxIDEgMCAwMS45OTYtLjk5N2gzYy4zNDggMCAuNjQ5LjE4LjgyOC40NWw0Ljk5NiA3LjQ5MmMuMTEuMTQ4LjE2OC4zNDcuMTY4LjU1em0wIDAiIC8+PC9nPjwvc3ZnPg==){.collapseSidebarButtonIcon_kv0_}
:::
:::

::: {.docMainContainer_gTbr role="main"}
::: {.container .padding-top--md .padding-bottom--lg}
::: row
::: {.col .docItemCol_VOVn}
::: docItemContainer_Djhp
-   [![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJicmVhZGNydW1iSG9tZUljb25fWU5GVCI+PHBhdGggZD0iTTEwIDE5di01aDR2NWMwIC41NS40NSAxIDEgMWgzYy41NSAwIDEtLjQ1IDEtMXYtN2gxLjdjLjQ2IDAgLjY4LS41Ny4zMy0uODdMMTIuNjcgMy42Yy0uMzgtLjM0LS45Ni0uMzQtMS4zNCAwbC04LjM2IDcuNTNjLS4zNC4zLS4xMy44Ny4zMy44N0g1djdjMCAuNTUuNDUgMSAxIDFoM2MuNTUgMCAxLS40NSAxLTF6IiBmaWxsPSJjdXJyZW50Q29sb3IiIC8+PC9zdmc+){.breadcrumbHomeIcon_YNFT}](https://python.langchain.com/){.breadcrumbs__link
    aria-label="Home page"}
-   [[Get
    started]{itemprop="name"}](https://python.langchain.com/docs/get_started){.breadcrumbs__link
    itemprop="item"}
-   [Installation]{.breadcrumbs__link itemprop="name"}

::: {.tocCollapsible_ETCw .theme-doc-toc-mobile .tocMobile_ITEo}
On this page
:::

::: {.theme-doc-markdown .markdown}
# Installation

## Official release[​](installation.html#official-release "Direct link to Official release"){.hash-link aria-label="Direct link to Official release"} {#official-release .anchor .anchorWithStickyNavbar_LWe7}

To install LangChain run:

::: {.tabs-container .tabList__CuJ}
-   Pip
-   Conda

::: margin-top--md
::: {.tabItem_Ymn6 role="tabpanel"}
::: {.language-bash .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-bash .codeBlock_bY9V .thin-scrollbar tabindex="0"}
pip install langchain
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::
:::

::: {.tabItem_Ymn6 role="tabpanel" hidden=""}
::: {.language-bash .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-bash .codeBlock_bY9V .thin-scrollbar tabindex="0"}
conda install langchain -c conda-forge
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::
:::
:::
:::

This will install the bare minimum requirements of LangChain. A lot of
the value of LangChain comes when integrating it with various model
providers, datastores, etc. By default, the dependencies needed to do
that are NOT installed. You will need to install the dependencies for
specific integrations separately.

## From source[​](installation.html#from-source "Direct link to From source"){.hash-link aria-label="Direct link to From source"} {#from-source .anchor .anchorWithStickyNavbar_LWe7}

If you want to install from source, you can do so by cloning the repo
and be sure that the directory is
`PATH/TO/REPO/langchain/libs/langchain` running:

::: {.language-bash .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-bash .codeBlock_bY9V .thin-scrollbar tabindex="0"}
pip install -e .
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

## LangChain community[​](installation.html#langchain-community "Direct link to LangChain community"){.hash-link aria-label="Direct link to LangChain community"} {#langchain-community .anchor .anchorWithStickyNavbar_LWe7}

The `langchain-community` package contains third-party integrations. It
is automatically installed by `langchain`, but can also be used
separately. Install with:

::: {.language-bash .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-bash .codeBlock_bY9V .thin-scrollbar tabindex="0"}
pip install langchain-community
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

## LangChain core[​](installation.html#langchain-core "Direct link to LangChain core"){.hash-link aria-label="Direct link to LangChain core"} {#langchain-core .anchor .anchorWithStickyNavbar_LWe7}

The `langchain-core` package contains base abstractions that the rest of
the LangChain ecosystem uses, along with the LangChain Expression
Language. It is automatically installed by `langchain`, but can also be
used separately. Install with:

::: {.language-bash .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-bash .codeBlock_bY9V .thin-scrollbar tabindex="0"}
pip install langchain-core
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

## LangChain experimental[​](installation.html#langchain-experimental "Direct link to LangChain experimental"){.hash-link aria-label="Direct link to LangChain experimental"} {#langchain-experimental .anchor .anchorWithStickyNavbar_LWe7}

The `langchain-experimental` package holds experimental LangChain code,
intended for research and experimental uses. Install with:

::: {.language-bash .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-bash .codeBlock_bY9V .thin-scrollbar tabindex="0"}
pip install langchain-experimental
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

## LangServe[​](installation.html#langserve "Direct link to LangServe"){.hash-link aria-label="Direct link to LangServe"} {#langserve .anchor .anchorWithStickyNavbar_LWe7}

LangServe helps developers deploy LangChain runnables and chains as a
REST API. LangServe is automatically installed by LangChain CLI. If not
using LangChain CLI, install with:

::: {.language-bash .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-bash .codeBlock_bY9V .thin-scrollbar tabindex="0"}
pip install "langserve[all]"
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

for both client and server dependencies. Or
`pip install "langserve[client]"` for client code, and
`pip install "langserve[server]"` for server code.

## LangChain CLI[​](installation.html#langchain-cli "Direct link to LangChain CLI"){.hash-link aria-label="Direct link to LangChain CLI"} {#langchain-cli .anchor .anchorWithStickyNavbar_LWe7}

The LangChain CLI is useful for working with LangChain templates and
other LangServe projects. Install with:

::: {.language-bash .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-bash .codeBlock_bY9V .thin-scrollbar tabindex="0"}
pip install langchain-cli
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

## LangSmith SDK[​](installation.html#langsmith-sdk "Direct link to LangSmith SDK"){.hash-link aria-label="Direct link to LangSmith SDK"} {#langsmith-sdk .anchor .anchorWithStickyNavbar_LWe7}

The LangSmith SDK is automatically installed by LangChain. If not using
LangChain, install with:

::: {.language-bash .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-bash .codeBlock_bY9V .thin-scrollbar tabindex="0"}
pip install langsmith
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::
:::

[](introduction.html){.pagination-nav__link .pagination-nav__link--prev}

::: pagination-nav__sublabel
Previous
:::

::: pagination-nav__label
Introduction
:::

[](quickstart.html){.pagination-nav__link .pagination-nav__link--next}

::: pagination-nav__sublabel
Next
:::

::: pagination-nav__label
Quickstart
:::
:::
:::

::: {.col .col--3}
::: {.tableOfContents_bqdL .thin-scrollbar .theme-doc-toc-desktop}
-   [Official
    release](installation.html#official-release){.table-of-contents__link
    .toc-highlight}
-   [From
    source](installation.html#from-source){.table-of-contents__link
    .toc-highlight}
-   [LangChain
    community](installation.html#langchain-community){.table-of-contents__link
    .toc-highlight}
-   [LangChain
    core](installation.html#langchain-core){.table-of-contents__link
    .toc-highlight}
-   [LangChain
    experimental](installation.html#langchain-experimental){.table-of-contents__link
    .toc-highlight}
-   [LangServe](installation.html#langserve){.table-of-contents__link
    .toc-highlight}
-   [LangChain
    CLI](installation.html#langchain-cli){.table-of-contents__link
    .toc-highlight}
-   [LangSmith
    SDK](installation.html#langsmith-sdk){.table-of-contents__link
    .toc-highlight}
:::
:::
:::
:::
:::
:::
:::

::: {.container .container-fluid}
::: {.row .footer__links}
::: {.col .footer__col}
::: footer__title
Community
:::

-   [Discord![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://discord.gg/cU2adEyC7w){.footer__link-item
    target="_blank" rel="noopener noreferrer"}
-   [Twitter![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://twitter.com/LangChainAI){.footer__link-item
    target="_blank" rel="noopener noreferrer"}
:::

::: {.col .footer__col}
::: footer__title
GitHub
:::

-   [Python![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://github.com/langchain-ai/langchain){.footer__link-item
    target="_blank" rel="noopener noreferrer"}
-   [JS/TS![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://github.com/langchain-ai/langchainjs){.footer__link-item
    target="_blank" rel="noopener noreferrer"}
:::

::: {.col .footer__col}
::: footer__title
More
:::

-   [Homepage![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://langchain.com){.footer__link-item
    target="_blank" rel="noopener noreferrer"}
-   [Blog![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://blog.langchain.dev){.footer__link-item
    target="_blank" rel="noopener noreferrer"}
:::
:::

::: {.footer__bottom .text--center}
::: footer__copyright
Copyright © 2024 LangChain, Inc.
:::
:::
:::
:::
