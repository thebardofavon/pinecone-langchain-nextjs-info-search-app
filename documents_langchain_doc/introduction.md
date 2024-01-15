---
description: "LangChain is a framework for developing applications
  powered by language models. It enables applications that:"
docsearch:docusaurus_tag: docs-default-current
docsearch:language: en
docsearch:version: current
docusaurus_locale: en
docusaurus_tag: docs-default-current
docusaurus_version: current
generator: Docusaurus v2.4.3
lang: en
title: Introduction \| 🦜️🔗 Langchain
twitter:card: summary_large_image
twitter:image: "https://python.langchain.com/img/parrot-chainlink-icon.png"
viewport: width=device-width,initial-scale=1
---

::: {#__docusaurus}
::: {role="region" aria-label="Skip to main content"}
[Skip to main
content](introduction.html#__docusaurus_skipToContent_fallback){.skipToContent_fXgn}
:::

::: navbar__inner
::: navbar__items
![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdib3g9IjAgMCAzMCAzMCIgYXJpYS1oaWRkZW49InRydWUiPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMiIgLz48L3N2Zz4=)

[**🦜️🔗
LangChain**](https://python.langchain.com/){.navbar__brand}[Docs](introduction.html){.navbar__item
.navbar__link .navbar__link--active aria-current="page"}[Use
cases](https://python.langchain.com/docs/use_cases){.navbar__item
.navbar__link}[Integrations](https://python.langchain.com/docs/integrations/providers){.navbar__item
.navbar__link}[Guides](https://python.langchain.com/docs/guides/debugging){.navbar__item
.navbar__link}[API![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://api.python.langchain.com){.navbar__item
.navbar__link target="_blank" rel="noopener noreferrer"}

::: {.navbar__item .dropdown .dropdown--hoverable}
[More](introduction.html#){.navbar__link aria-haspopup="true"
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
[🦜️🔗](introduction.html#){.navbar__link aria-haspopup="true"
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

    -   [Introduction](introduction.html){.menu__link
        .menu__link--active aria-current="page" tabindex="0"}
    -   [Installation](installation.html){.menu__link tabindex="0"}
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
-   [Introduction]{.breadcrumbs__link itemprop="name"}

::: {.tocCollapsible_ETCw .theme-doc-toc-mobile .tocMobile_ITEo}
On this page
:::

::: {.theme-doc-markdown .markdown}
# Introduction

**LangChain** is a framework for developing applications powered by
language models. It enables applications that:

-   **Are context-aware**: connect a language model to sources of
    context (prompt instructions, few shot examples, content to ground
    its response in, etc.)
-   **Reason**: rely on a language model to reason (about how to answer
    based on provided context, what actions to take, etc.)

This framework consists of several parts.

-   **LangChain Libraries**: The Python and JavaScript libraries.
    Contains interfaces and integrations for a myriad of components, a
    basic run time for combining these components into chains and
    agents, and off-the-shelf implementations of chains and agents.
-   **[LangChain
    Templates](https://python.langchain.com/docs/templates)**: A
    collection of easily deployable reference architectures for a wide
    variety of tasks.
-   **[LangServe](https://python.langchain.com/docs/langserve)**: A
    library for deploying LangChain chains as a REST API.
-   **[LangSmith](https://python.langchain.com/docs/langsmith)**: A
    developer platform that lets you debug, test, evaluate, and monitor
    chains built on any LLM framework and seamlessly integrates with
    LangChain.

![Diagram outlining the hierarchical organization of the LangChain
framework, displaying the interconnected parts across multiple
layers.](../../assets/images/langchain_stack-f21828069f74484521f38199910007c1.svg "LangChain Framework Overview"){.img_ev3q
loading="lazy" width="1281" height="1296"}

Together, these products simplify the entire application lifecycle:

-   **Develop**: Write your applications in LangChain/LangChain.js. Hit
    the ground running using Templates for reference.
-   **Productionize**: Use LangSmith to inspect, test and monitor your
    chains, so that you can constantly improve and deploy with
    confidence.
-   **Deploy**: Turn any chain into an API with LangServe.

## LangChain Libraries[​](introduction.html#langchain-libraries "Direct link to LangChain Libraries"){.hash-link aria-label="Direct link to LangChain Libraries"} {#langchain-libraries .anchor .anchorWithStickyNavbar_LWe7}

The main value props of the LangChain packages are:

1.  **Components**: composable tools and integrations for working with
    language models. Components are modular and easy-to-use, whether you
    are using the rest of the LangChain framework or not
2.  **Off-the-shelf chains**: built-in assemblages of components for
    accomplishing higher-level tasks

Off-the-shelf chains make it easy to get started. Components make it
easy to customize existing chains and build new ones.

The LangChain libraries themselves are made up of several different
packages.

-   **`langchain-core`**: Base abstractions and LangChain Expression
    Language.
-   **`langchain-community`**: Third party integrations.
-   **`langchain`**: Chains, agents, and retrieval strategies that make
    up an application\'s cognitive architecture.

## Get started[​](introduction.html#get-started "Direct link to Get started"){.hash-link aria-label="Direct link to Get started"} {#get-started .anchor .anchorWithStickyNavbar_LWe7}

[Here's](installation.html) how to install LangChain, set up your
environment, and start building.

We recommend following our [Quickstart](quickstart.html) guide to
familiarize yourself with the framework by building your first LangChain
application.

Read up on our [Security](https://python.langchain.com/docs/security)
best practices to make sure you\'re developing safely with LangChain.

::: {.theme-admonition .theme-admonition-note .alert .alert--secondary .admonition_LlT9}
::: admonitionHeading_tbUL
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTQgMTYiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMyA1LjY5YS45NDIuOTQyIDAgMCAxLS4yOC0uN2MwLS4yOC4wOS0uNTIuMjgtLjcuMTktLjE4LjQyLS4yOC43LS4yOC4yOCAwIC41Mi4wOS43LjI4LjE4LjE5LjI4LjQyLjI4LjcgMCAuMjgtLjA5LjUyLS4yOC43YTEgMSAwIDAgMS0uNy4zYy0uMjggMC0uNTItLjExLS43LS4zek04IDcuOTljLS4wMi0uMjUtLjExLS40OC0uMzEtLjY5LS4yLS4xOS0uNDItLjMtLjY5LS4zMUg2Yy0uMjcuMDItLjQ4LjEzLS42OS4zMS0uMi4yLS4zLjQ0LS4zMS42OWgxdjNjLjAyLjI3LjExLjUuMzEuNjkuMi4yLjQyLjMxLjY5LjMxaDFjLjI3IDAgLjQ4LS4xMS42OS0uMzEuMi0uMTkuMy0uNDIuMzEtLjY5SDhWNy45OHYuMDF6TTcgMi4zYy0zLjE0IDAtNS43IDIuNTQtNS43IDUuNjggMCAzLjE0IDIuNTYgNS43IDUuNyA1LjdzNS43LTIuNTUgNS43LTUuN2MwLTMuMTUtMi41Ni01LjY5LTUuNy01LjY5di4wMXpNNyAuOThjMy44NiAwIDcgMy4xNCA3IDdzLTMuMTQgNy03IDctNy0zLjEyLTctNyAzLjE0LTcgNy03eiIgLz48L3N2Zz4=)]{.admonitionIcon_kALy}note
:::

::: admonitionContent_S0QG
These docs focus on the Python LangChain library. [Head
here](https://js.langchain.com){target="_blank"
rel="noopener noreferrer"} for docs on the JavaScript LangChain library.
:::
:::

## LangChain Expression Language (LCEL)[​](introduction.html#langchain-expression-language-lcel "Direct link to LangChain Expression Language (LCEL)"){.hash-link aria-label="Direct link to LangChain Expression Language (LCEL)"} {#langchain-expression-language-lcel .anchor .anchorWithStickyNavbar_LWe7}

LCEL is a declarative way to compose chains. LCEL was designed from day
1 to support putting prototypes in production, with no code changes,
from the simplest "prompt + LLM" chain to the most complex chains.

-   **[Overview](https://python.langchain.com/docs/expression_language/)**:
    LCEL and its benefits
-   **[Interface](https://python.langchain.com/docs/expression_language/interface)**:
    The standard interface for LCEL objects
-   **[How-to](https://python.langchain.com/docs/expression_language/how_to)**:
    Key features of LCEL
-   **[Cookbook](https://python.langchain.com/docs/expression_language/cookbook)**:
    Example code for accomplishing common tasks

## Modules[​](introduction.html#modules "Direct link to Modules"){.hash-link aria-label="Direct link to Modules"} {#modules .anchor .anchorWithStickyNavbar_LWe7}

LangChain provides standard, extendable interfaces and integrations for
the following modules:

#### [Model I/O](https://python.langchain.com/docs/modules/model_io/)[​](introduction.html#model-io "Direct link to model-io"){.hash-link aria-label="Direct link to model-io"} {#model-io .anchor .anchorWithStickyNavbar_LWe7}

Interface with language models

#### [Retrieval](https://python.langchain.com/docs/modules/data_connection/)[​](introduction.html#retrieval "Direct link to retrieval"){.hash-link aria-label="Direct link to retrieval"} {#retrieval .anchor .anchorWithStickyNavbar_LWe7}

Interface with application-specific data

#### [Agents](https://python.langchain.com/docs/modules/agents/)[​](introduction.html#agents "Direct link to agents"){.hash-link aria-label="Direct link to agents"} {#agents .anchor .anchorWithStickyNavbar_LWe7}

Let models choose which tools to use given high-level directives

## Examples, ecosystem, and resources[​](introduction.html#examples-ecosystem-and-resources "Direct link to Examples, ecosystem, and resources"){.hash-link aria-label="Direct link to Examples, ecosystem, and resources"} {#examples-ecosystem-and-resources .anchor .anchorWithStickyNavbar_LWe7}

### [Use cases](https://python.langchain.com/docs/use_cases/question_answering/)[​](introduction.html#use-cases "Direct link to use-cases"){.hash-link aria-label="Direct link to use-cases"} {#use-cases .anchor .anchorWithStickyNavbar_LWe7}

Walkthroughs and techniques for common end-to-end use cases, like:

-   [Document question
    answering](https://python.langchain.com/docs/use_cases/question_answering/)
-   [Chatbots](https://python.langchain.com/docs/use_cases/chatbots/)
-   [Analyzing structured
    data](https://python.langchain.com/docs/use_cases/qa_structured/sql/)
-   and much more\...

### [Integrations](https://python.langchain.com/docs/integrations/providers/)[​](introduction.html#integrations "Direct link to integrations"){.hash-link aria-label="Direct link to integrations"} {#integrations .anchor .anchorWithStickyNavbar_LWe7}

LangChain is part of a rich ecosystem of tools that integrate with our
framework and build on top of it. Check out our growing list of
[integrations](https://python.langchain.com/docs/integrations/providers/).

### [Guides](https://python.langchain.com/docs/guides/debugging)[​](introduction.html#guides "Direct link to guides"){.hash-link aria-label="Direct link to guides"} {#guides .anchor .anchorWithStickyNavbar_LWe7}

Best practices for developing with LangChain.

### [API reference](https://api.python.langchain.com){target="_blank" rel="noopener noreferrer"}[​](introduction.html#api-reference "Direct link to api-reference"){.hash-link aria-label="Direct link to api-reference"} {#api-reference .anchor .anchorWithStickyNavbar_LWe7}

Head to the reference section for full documentation of all classes and
methods in the LangChain and LangChain Experimental Python packages.

### [Developer\'s guide](https://python.langchain.com/docs/contributing)[​](introduction.html#developers-guide "Direct link to developers-guide"){.hash-link aria-label="Direct link to developers-guide"} {#developers-guide .anchor .anchorWithStickyNavbar_LWe7}

Check out the developer\'s guide for guidelines on contributing and help
getting your dev environment set up.

### [Community](https://python.langchain.com/docs/community)[​](introduction.html#community "Direct link to community"){.hash-link aria-label="Direct link to community"} {#community .anchor .anchorWithStickyNavbar_LWe7}

Head to the [Community
navigator](https://python.langchain.com/docs/community) to find places
to ask questions, share feedback, meet other developers, and dream about
the future of LLM's.
:::

[](https://python.langchain.com/docs/get_started){.pagination-nav__link
.pagination-nav__link--prev}

::: pagination-nav__sublabel
Previous
:::

::: pagination-nav__label
Get started
:::

[](installation.html){.pagination-nav__link .pagination-nav__link--next}

::: pagination-nav__sublabel
Next
:::

::: pagination-nav__label
Installation
:::
:::
:::

::: {.col .col--3}
::: {.tableOfContents_bqdL .thin-scrollbar .theme-doc-toc-desktop}
-   [LangChain
    Libraries](introduction.html#langchain-libraries){.table-of-contents__link
    .toc-highlight}
-   [Get
    started](introduction.html#get-started){.table-of-contents__link
    .toc-highlight}
-   [LangChain Expression Language
    (LCEL)](introduction.html#langchain-expression-language-lcel){.table-of-contents__link
    .toc-highlight}
-   [Modules](introduction.html#modules){.table-of-contents__link
    .toc-highlight}
-   [Examples, ecosystem, and
    resources](introduction.html#examples-ecosystem-and-resources){.table-of-contents__link
    .toc-highlight}
    -   [Use
        cases](introduction.html#use-cases){.table-of-contents__link
        .toc-highlight}
    -   [Integrations](introduction.html#integrations){.table-of-contents__link
        .toc-highlight}
    -   [Guides](introduction.html#guides){.table-of-contents__link
        .toc-highlight}
    -   [API
        reference](introduction.html#api-reference){.table-of-contents__link
        .toc-highlight}
    -   [Developer\'s
        guide](introduction.html#developers-guide){.table-of-contents__link
        .toc-highlight}
    -   [Community](introduction.html#community){.table-of-contents__link
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
