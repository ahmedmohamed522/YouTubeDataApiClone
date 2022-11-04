import React, { useCallback, useRef } from "react";
import Breadcramp from "./Breadcramp";

import { FaRegBookmark } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoLinkOutline } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";
import ScrollSpy from "react-ui-scrollspy";
import { useState } from "react";
import { useEffect } from "react";
import CopiedAlert from "./CopiedAlert";
import { useCloseOnClickOutside } from "../../hooks/useCloseOnClickOutside";

const Article = ({ isSidebarVisible }) => {
    const [showAlert, setShowAlert] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
    const [categoryNameValue, setCategoryNameValue] = useState("");
    const [inputError, setInputError] = useState(false);
    const [submit, setSubmit] = useState(false);

    const dropdownRef = useRef(null);
    const inputRef = useRef(null);
    const inputHandler = () => {
        inputRef.current?.focus();
    };
    const closeDropdown = useCallback(() => {
        setUserFocus(false);
        setDropdown(false);
        setInputError(false);
        setSubmit(false);
    }, []);

    const addCategory = (val) => {
        if (val.trim().length === 0) setInputError(true);
    };
    useCloseOnClickOutside(dropdownRef, closeDropdown);

    const alertHandler = () => {
        setShowAlert(true);
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [showAlert]);
    useEffect(() => {
        inputHandler();
    }, [userFocus]);
    return (
        <article
            className={`flex-1  ${
                isSidebarVisible ? "md:ml-[294px]" : "md:ml-[194px]"
            } xl:mr-[192px] max-w-[936px] p-10 bg-white  shadow-lg md:border border-gray-200 rounded `}
        >
            <Breadcramp />
            {/* Description */}
            <div className="text-3xl flex items-center gap-3 mb-4">
                <h1 className="text-gray-800">API Reference</h1>
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => {
                            setDropdown(!dropdown);
                        }}
                        className="relative flex gap-1 p-2 px-1.5 border border-gray-300  text-gray-700 rounded hover:text-gray-900 hover:bg-gray-100 transition-all"
                    >
                        <FaRegBookmark size={18} />
                        <IoMdArrowDropdown size={18} />
                    </button>
                    <div
                        className={`${
                            dropdown ? "block" : "hidden"
                        } absolute top-[35px] left-0 py-2 bg-white rounded shadow-lg border border-gray-200 text-base`}
                    >
                        <div className=" border-b border-gray-300">
                            <div className="py-3 px-4 flex  hover:bg-gray-100">
                                <input id="saved-pages" type="checkbox" className="w-4 cursor-pointer" />
                                <label
                                    htmlFor="saved-pages"
                                    className="whitespace-nowrap pl-4  cursor-pointer"
                                >
                                    My saved pages
                                </label>
                            </div>
                        </div>

                        <div className="">
                            {userFocus ? (
                                <div className="flex flex-col gap-3 p-4">
                                    <div className="relative group">
                                        <label
                                            htmlFor="name"
                                            className={`absolute left-4 top-[15px] px-1 group-focus-within:top-[-10px] group-focus-within:text-[13px] group-focus-within:text-blue-600 bg-white inline-block transition-all font-medium pointer-events-none ${
                                                inputError && "text-red-500 group-focus-within:text-red-500"
                                            }`}
                                        >
                                            Name*
                                        </label>
                                        <input
                                            onChange={(e) => {
                                                setCategoryNameValue(e.target.value);
                                                e.target.value.trim().length > 0
                                                    ? setInputError(false)
                                                    : submit && setInputError(true);
                                            }}
                                            ref={inputRef}
                                            type="text"
                                            id="name"
                                            className={`px-4  border border-gray-200  [&:hover:not(:focus)]:border-gray-700  focus:outline-blue-600 focus:outline-2 rounded max-w-[168px] leading-[50px] ${
                                                inputError &&
                                                "border-red-500  border-2 focus:outline-red-500 [&:hover:not(:focus)]:border-red-500"
                                            }`}
                                        />
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                            onClick={() => {
                                                addCategory(categoryNameValue);
                                                setSubmit(true);
                                            }}
                                            className="text-sm font-medium text-blue-500 leading-[30px] px-2 hover:bg-blue-50 rounded"
                                        >
                                            Done
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div
                                    onClick={() => {
                                        setUserFocus(true);
                                    }}
                                    className="py-3 px-4 flex items-center  border-b border-gray-300 hover:bg-gray-100 cursor-pointer"
                                >
                                    <BsPlusLg size="16" />
                                    <div className="whitespace-nowrap pl-4">New Collection</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-gray-900 mb-8">
                <p className="mb-4">
                    The YouTube Data API lets you incorporate functions normally executed on the YouTube
                    website into your own website or application. The lists below identify the different types
                    of resources that you can retrieve using the API. The API also supports methods to insert,
                    update, or delete many of these resources.
                </p>
                <p>
                    This reference guide explains how to use the API to perform all of these operations. The
                    guide is organized by resource type. A resource represents a type of item that comprises
                    part of the YouTube experience, such as a video, a playlist, or a subscription. For each
                    resource type, the guide lists one or more data representations, and resources are
                    represented as JSON objects. The guide also lists one or more supported methods (LIST,
                    POST, DELETE, etc.) for each resource type and explains how to use those methods in your
                    application.
                </p>
            </div>
            <ScrollSpy>
                <section id="call-api" className="text-gray-900 mb-8">
                    <div className="flex items-center gap-4 group mb-6">
                        <h2 className="text-2xl text-gray-900">Calling the API</h2>
                        <button
                            className="hidden group-hover:block"
                            onClick={() => {
                                navigator.clipboard.writeText(window.location.origin + "/#call-api");
                                alertHandler();
                            }}
                        >
                            <IoLinkOutline size={22} className="hover:text-blue-600" />
                        </button>
                        <CopiedAlert showAlert={showAlert} />
                    </div>

                    <p className="mb-4">The following requirements apply to YouTube Data API requests:</p>
                    <ol className="list-decimal ml-10">
                        <li className="mb-4">
                            <p>
                                Every request must either specify an API key (with the key parameter) or
                                provide an OAuth 2.0 token.
                            </p>
                            <p>
                                Your API key is available in the{" "}
                                <a href="https://console.developers.google.com/" className="text-blue-500">
                                    Developer Console's
                                </a>{" "}
                                <strong>API Access</strong> pane for your project.
                            </p>
                        </li>
                        <li className="mb-4">
                            <p className="mb-4">
                                You <strong>must</strong> send an authorization token for every insert,
                                update, and delete request. You must also send an authorization token for any
                                request that retrieves the authenticated user's private data.
                            </p>
                            <p>
                                In addition, some API methods for retrieving resources may support parameters
                                that require authorization or may contain additional metadata when requests
                                are authorized. For example, a request to retrieve a user's uploaded videos
                                may also contain private videos if the request is authorized by that specific
                                user.
                            </p>
                        </li>
                        <li>
                            <p className="mb-4">
                                The API supports the OAuth 2.0 authentication protocol. You can provide an
                                OAuth 2.0 token in either of the following ways:
                            </p>
                            <ul className="list-disc ml-8 ">
                                <li className="mb-4">
                                    Use the <span className="code">access_token</span> query parameter like
                                    this: <span className="code">?access_token=oauth2-token</span>
                                </li>
                                <li className="mb-4">
                                    Use the HTTP <span className="code">Authorization</span> header like this:
                                    <span className="code">Authorization: Bearer</span>{" "}
                                    <span className="code">oauth2-token</span>
                                </li>
                            </ul>
                            <p className="">
                                <span>
                                    Complete instructions for implementing OAuth 2.0 authentication in your
                                    application can be found in the
                                </span>{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/guides/authentication"
                                    className="text-blue-500"
                                >
                                    authentication guide
                                </a>
                                .
                            </p>
                        </li>
                    </ol>
                </section>

                <section id="resources-types" className="mb-8">
                    <ScrollSpy>
                        <div className="flex items-center gap-4 group mb-8">
                            <h2 className="text-2xl text-gray-900">Resource types</h2>
                            <button
                                className=" hidden group-hover:block"
                                onClick={() => {
                                    navigator.clipboard.writeText(
                                        window.location.origin + "/#resources-types"
                                    );
                                    alertHandler();
                                }}
                            >
                                <IoLinkOutline size={22} className="hover:text-blue-600" />
                            </button>
                        </div>

                        <section id="activities" className="mb-4">
                            <div className="flex items-center gap-4 group mb-6">
                                <h3 className="text-xl text-gray-900">Activities</h3>
                                <button
                                    className=" hidden group-hover:block"
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            window.location.origin + "/#activities"
                                        );
                                        alertHandler();
                                    }}
                                >
                                    <IoLinkOutline size={22} className="hover:text-blue-600" />
                                </button>
                            </div>
                            <p className="mb-4">
                                An <span className="code">activity</span> resource contains information about
                                an action that a particular channel, or user, has taken on YouTube. The
                                actions reported in activity feeds include rating a video, sharing a video,
                                marking a video as a favorite, uploading a video, and so forth. Each{" "}
                                <span className="code">activity</span> resource identifies the type of action,
                                the channel associated with the action, and the resource(s) associated with
                                the action, such as the video that was rated or uploaded.
                            </p>
                            <p className="mb-4">
                                For more information about this resource, see its{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#resource"
                                    className="text-blue-600"
                                >
                                    resource representation
                                </a>{" "}
                                and list of{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#properties"
                                    className="text-blue-600"
                                >
                                    {" "}
                                    properties
                                </a>
                                .
                            </p>

                            <div className=" text-sm text-gray-900 border-y border-gray-200 mb-8">
                                <div className="grid  table-cols bg-gray-200  font-semibold border-b border-gray-200">
                                    <div className="p-2">Method</div>
                                    <div className="p-2">HTTP request</div>
                                    <div className="p-2">Description</div>
                                </div>
                                <div className="bg-gray-100 p-2 border-b border-gray-200">
                                    URIs relative to{" "}
                                    <span className="font-medium">https://www.googleapis.com/youtube/v3</span>
                                </div>
                                <div className="grid  table-cols border-b border-gray-200">
                                    <div className="p-2 ">
                                        <a href="list" className="table-link">
                                            list
                                        </a>
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>GET /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-black">
                                        Returns a list of channel activity events that match the request
                                        criteria. For example, you can retrieve events associated with a
                                        particular channel or with the user's own channel.
                                    </div>
                                </div>

                                <div className="grid  table-cols  ">
                                    <div className="p-2 ">
                                        <a href="insert" className="table-link">
                                            insert
                                        </a>{" "}
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>POST /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-red-500">
                                        <strong>Note</strong>: This method has been deprecated and is no
                                        longer supported.
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Captions */}
                        <section id="captions" className="mb-4">
                            <div className="flex items-center gap-4 group mb-6">
                                <h3 className="text-xl text-gray-900">Captions</h3>
                                <button
                                    className=" hidden group-hover:block"
                                    onClick={() => {
                                        navigator.clipboard.writeText(window.location.origin + "/#captions");
                                        alertHandler();
                                    }}
                                >
                                    <IoLinkOutline size={22} className="hover:text-blue-600" />
                                </button>
                            </div>
                            <p className="mb-4">
                                A <span className="code">caption</span> resource represents a YouTube caption
                                track. A caption track is associated with exactly one YouTube video.
                            </p>
                            <p className="mb-4">
                                For more information about this resource, see its{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#resource"
                                    className="text-blue-600"
                                >
                                    resource representation
                                </a>{" "}
                                and list of{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#properties"
                                    className="text-blue-600"
                                >
                                    {" "}
                                    properties
                                </a>
                                .
                            </p>

                            <div className=" text-sm text-gray-900 border-y border-gray-200 mb-8">
                                <div className="grid  table-cols bg-gray-200  font-semibold border-b border-gray-200">
                                    <div className="p-2">Method</div>
                                    <div className="p-2">HTTP request</div>
                                    <div className="p-2">Description</div>
                                </div>
                                <div className="bg-gray-100 p-2 border-b border-gray-200">
                                    URIs relative to{" "}
                                    <span className="font-medium">https://www.googleapis.com/youtube/v3</span>
                                </div>
                                <div className="grid  table-cols border-b border-gray-200">
                                    <div className="p-2 ">
                                        <a href="delete" className="table-link">
                                            delete
                                        </a>
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>DELETE /</div> <div className="tracking-wider">captions</div>
                                    </div>
                                    <div className="p-2 text-black">Deletes the specified caption track.</div>
                                </div>

                                <div className="grid  grid-cols-[minmax(min-content,66px)_minmax(125px,max-content)_1fr]  ">
                                    <div className="p-2 ">
                                        <a href="download" className="table-link">
                                            download
                                        </a>{" "}
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>GET /</div>{" "}
                                        <div className="tracking-wider">
                                            captions/ <span className="text-red-600">id</span>
                                        </div>
                                    </div>
                                    <div className="p-2 text-black">
                                        Downloads a caption track. The caption track is returned in its
                                        original format unless the request specifies a value for the tfmt
                                        parameter and in its original language unless the request specifies a
                                        value for the tlang parameter.
                                    </div>
                                </div>

                                <div className="grid  table-cols  ">
                                    <div className="p-2 ">
                                        <a href="insert	" className="table-link">
                                            insert
                                        </a>{" "}
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>POST /</div> <div className="tracking-wider">captions</div>
                                    </div>
                                    <div className="p-2 text-black">Uploads a caption track.</div>
                                </div>

                                <div className="grid  table-cols  ">
                                    <div className="p-2 ">
                                        <a href="list" className="table-link">
                                            list
                                        </a>{" "}
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>GET /</div> <div className="tracking-wider">captions</div>
                                    </div>
                                    <div className="p-2 text-black">
                                        Returns a list of caption tracks that are associated with a specified
                                        video. Note that the API response does not contain the actual captions
                                        and that the{" "}
                                        <a href="link" className="text-blue-600">
                                            captions.download
                                        </a>{" "}
                                        method provides the ability to retrieve a caption track.
                                    </div>
                                </div>

                                <div className="grid  table-cols  ">
                                    <div className="p-2 ">
                                        <a href="update" className="table-link">
                                            update
                                        </a>{" "}
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>PUT /</div> <div className="tracking-wider">captions</div>
                                    </div>
                                    <div className="p-2 text-black">
                                        Updates a caption track. When updating a caption track, you can change
                                        the track's
                                        <a href="link" className="text-blue-600">
                                            draft status
                                        </a>{" "}
                                        , upload a new caption file for the track, or both.
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ChannelBanners */}

                        <section id="channel-banners" className="mb-4">
                            <div className="flex items-center gap-4 group mb-6">
                                <h3 className="text-xl text-gray-900">ChannelBanners</h3>
                                <button
                                    className=" hidden group-hover:block"
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            window.location.origin + "/#channel-banners"
                                        );
                                        alertHandler();
                                    }}
                                >
                                    <IoLinkOutline size={22} className="hover:text-blue-600" />
                                </button>
                            </div>
                            <p className="mb-4">
                                An <span className="code">activity</span> resource contains information about
                                an action that a particular channel, or user, has taken on YouTube. The
                                actions reported in activity feeds include rating a video, sharing a video,
                                marking a video as a favorite, uploading a video, and so forth. Each{" "}
                                <span className="code">activity</span> resource identifies the type of action,
                                the channel associated with the action, and the resource(s) associated with
                                the action, such as the video that was rated or uploaded.
                            </p>
                            <p className="mb-4">
                                For more information about this resource, see its{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#resource"
                                    className="text-blue-600"
                                >
                                    resource representation
                                </a>{" "}
                                and list of{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#properties"
                                    className="text-blue-600"
                                >
                                    {" "}
                                    properties
                                </a>
                                .
                            </p>

                            <div className=" text-sm text-gray-900 border-y border-gray-200 mb-8">
                                <div className="grid  table-cols bg-gray-200  font-semibold border-b border-gray-200">
                                    <div className="p-2">Method</div>
                                    <div className="p-2">HTTP request</div>
                                    <div className="p-2">Description</div>
                                </div>
                                <div className="bg-gray-100 p-2 border-b border-gray-200">
                                    URIs relative to{" "}
                                    <span className="font-medium">https://www.googleapis.com/youtube/v3</span>
                                </div>
                                <div className="grid  table-cols border-b border-gray-200">
                                    <div className="p-2 ">
                                        <a href="list" className="table-link">
                                            list
                                        </a>
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>GET /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-black">
                                        Returns a list of channel activity events that match the request
                                        criteria. For example, you can retrieve events associated with a
                                        particular channel or with the user's own channel.
                                    </div>
                                </div>

                                <div className="grid  table-cols  ">
                                    <div className="p-2 ">
                                        <a href="insert" className="table-link">
                                            insert
                                        </a>{" "}
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>POST /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-red-500">
                                        <strong>Note</strong>: This method has been deprecated and is no
                                        longer supported.
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ChannelSections */}

                        <section id="channel-sections" className="mb-4">
                            <div className="flex items-center gap-4 group mb-6">
                                <h3 className="text-xl text-gray-900">ChannelSections</h3>
                                <button
                                    className=" hidden group-hover:block"
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            window.location.origin + "/#channel-sections"
                                        );
                                        alertHandler();
                                    }}
                                >
                                    <IoLinkOutline size={22} className="hover:text-blue-600" />
                                </button>
                            </div>
                            <p className="mb-4">
                                An <span className="code">activity</span> resource contains information about
                                an action that a particular channel, or user, has taken on YouTube. The
                                actions reported in activity feeds include rating a video, sharing a video,
                                marking a video as a favorite, uploading a video, and so forth. Each{" "}
                                <span className="code">activity</span> resource identifies the type of action,
                                the channel associated with the action, and the resource(s) associated with
                                the action, such as the video that was rated or uploaded.
                            </p>
                            <p className="mb-4">
                                For more information about this resource, see its{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#resource"
                                    className="text-blue-600"
                                >
                                    resource representation
                                </a>{" "}
                                and list of{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#properties"
                                    className="text-blue-600"
                                >
                                    {" "}
                                    properties
                                </a>
                                .
                            </p>

                            <div className=" text-sm text-gray-900 border-y border-gray-200 mb-8">
                                <div className="grid  table-cols bg-gray-200  font-semibold border-b border-gray-200">
                                    <div className="p-2">Method</div>
                                    <div className="p-2">HTTP request</div>
                                    <div className="p-2">Description</div>
                                </div>
                                <div className="bg-gray-100 p-2 border-b border-gray-200">
                                    URIs relative to{" "}
                                    <span className="font-medium">https://www.googleapis.com/youtube/v3</span>
                                </div>
                                <div className="grid  table-cols border-b border-gray-200">
                                    <div className="p-2 ">
                                        <a href="list" className="table-link">
                                            list
                                        </a>
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>GET /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-black">
                                        Returns a list of channel activity events that match the request
                                        criteria. For example, you can retrieve events associated with a
                                        particular channel or with the user's own channel.
                                    </div>
                                </div>

                                <div className="grid  table-cols  ">
                                    <div className="p-2 ">
                                        <a href="insert" className="table-link">
                                            insert
                                        </a>{" "}
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>POST /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-red-500">
                                        <strong>Note</strong>: This method has been deprecated and is no
                                        longer supported.
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Channels */}

                        <section id="channels" className="mb-4">
                            <div className="flex items-center gap-4 group mb-6">
                                <h3 className="text-xl text-gray-900">Channels</h3>
                                <button
                                    className=" hidden group-hover:block"
                                    onClick={() => {
                                        navigator.clipboard.writeText(window.location.origin + "/#channels");
                                        alertHandler();
                                    }}
                                >
                                    <IoLinkOutline size={22} className="hover:text-blue-600" />
                                </button>
                            </div>
                            <p className="mb-4">
                                An <span className="code">activity</span> resource contains information about
                                an action that a particular channel, or user, has taken on YouTube. The
                                actions reported in activity feeds include rating a video, sharing a video,
                                marking a video as a favorite, uploading a video, and so forth. Each{" "}
                                <span className="code">activity</span> resource identifies the type of action,
                                the channel associated with the action, and the resource(s) associated with
                                the action, such as the video that was rated or uploaded.
                            </p>
                            <p className="mb-4">
                                For more information about this resource, see its{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#resource"
                                    className="text-blue-600"
                                >
                                    resource representation
                                </a>{" "}
                                and list of{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#properties"
                                    className="text-blue-600"
                                >
                                    {" "}
                                    properties
                                </a>
                                .
                            </p>

                            <div className=" text-sm text-gray-900 border-y border-gray-200 mb-8">
                                <div className="grid  table-cols bg-gray-200  font-semibold border-b border-gray-200">
                                    <div className="p-2">Method</div>
                                    <div className="p-2">HTTP request</div>
                                    <div className="p-2">Description</div>
                                </div>
                                <div className="bg-gray-100 p-2 border-b border-gray-200">
                                    URIs relative to{" "}
                                    <span className="font-medium">https://www.googleapis.com/youtube/v3</span>
                                </div>
                                <div className="grid  table-cols border-b border-gray-200">
                                    <div className="p-2 ">
                                        <a href="list" className="table-link">
                                            list
                                        </a>
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>GET /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-black">
                                        Returns a list of channel activity events that match the request
                                        criteria. For example, you can retrieve events associated with a
                                        particular channel or with the user's own channel.
                                    </div>
                                </div>

                                <div className="grid  table-cols  ">
                                    <div className="p-2 ">
                                        <a href="insert" className="table-link">
                                            insert
                                        </a>{" "}
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>POST /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-red-500">
                                        <strong>Note</strong>: This method has been deprecated and is no
                                        longer supported.
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CommentThreads */}

                        <section id="comment-threads" className="mb-4">
                            <div className="flex items-center gap-4 group mb-6">
                                <h3 className="text-xl text-gray-900">CommentThreads</h3>
                                <button
                                    className=" hidden group-hover:block"
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            window.location.origin + "/#comment-threads"
                                        );
                                        alertHandler();
                                    }}
                                >
                                    <IoLinkOutline size={22} className="hover:text-blue-600" />
                                </button>
                            </div>
                            <p className="mb-4">
                                An <span className="code">activity</span> resource contains information about
                                an action that a particular channel, or user, has taken on YouTube. The
                                actions reported in activity feeds include rating a video, sharing a video,
                                marking a video as a favorite, uploading a video, and so forth. Each{" "}
                                <span className="code">activity</span> resource identifies the type of action,
                                the channel associated with the action, and the resource(s) associated with
                                the action, such as the video that was rated or uploaded.
                            </p>
                            <p className="mb-4">
                                For more information about this resource, see its{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#resource"
                                    className="text-blue-600"
                                >
                                    resource representation
                                </a>{" "}
                                and list of{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#properties"
                                    className="text-blue-600"
                                >
                                    {" "}
                                    properties
                                </a>
                                .
                            </p>

                            <div className=" text-sm text-gray-900 border-y border-gray-200 mb-8">
                                <div className="grid  table-cols bg-gray-200  font-semibold border-b border-gray-200">
                                    <div className="p-2">Method</div>
                                    <div className="p-2">HTTP request</div>
                                    <div className="p-2">Description</div>
                                </div>
                                <div className="bg-gray-100 p-2 border-b border-gray-200">
                                    URIs relative to{" "}
                                    <span className="font-medium">https://www.googleapis.com/youtube/v3</span>
                                </div>
                                <div className="grid  table-cols border-b border-gray-200">
                                    <div className="p-2 ">
                                        <a href="list" className="table-link">
                                            list
                                        </a>
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>GET /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-black">
                                        Returns a list of channel activity events that match the request
                                        criteria. For example, you can retrieve events associated with a
                                        particular channel or with the user's own channel.
                                    </div>
                                </div>

                                <div className="grid  table-cols  ">
                                    <div className="p-2 ">
                                        <a href="insert" className="table-link">
                                            insert
                                        </a>{" "}
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>POST /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-red-500">
                                        <strong>Note</strong>: This method has been deprecated and is no
                                        longer supported.
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Comments */}

                        <section id="comments" className="mb-4">
                            <div className="flex items-center gap-4 group mb-6">
                                <h3 className="text-xl text-gray-900">Comments</h3>
                                <button
                                    className=" hidden group-hover:block"
                                    onClick={() => {
                                        navigator.clipboard.writeText(window.location.origin + "/#comments");
                                        alertHandler();
                                    }}
                                >
                                    <IoLinkOutline size={22} className="hover:text-blue-600" />
                                </button>
                            </div>
                            <p className="mb-4">
                                An <span className="code">activity</span> resource contains information about
                                an action that a particular channel, or user, has taken on YouTube. The
                                actions reported in activity feeds include rating a video, sharing a video,
                                marking a video as a favorite, uploading a video, and so forth. Each{" "}
                                <span className="code">activity</span> resource identifies the type of action,
                                the channel associated with the action, and the resource(s) associated with
                                the action, such as the video that was rated or uploaded.
                            </p>
                            <p className="mb-4">
                                For more information about this resource, see its{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#resource"
                                    className="text-blue-600"
                                >
                                    resource representation
                                </a>{" "}
                                and list of{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#properties"
                                    className="text-blue-600"
                                >
                                    {" "}
                                    properties
                                </a>
                                .
                            </p>

                            <div className=" text-sm text-gray-900 border-y border-gray-200 mb-8">
                                <div className="grid  table-cols bg-gray-200  font-semibold border-b border-gray-200">
                                    <div className="p-2">Method</div>
                                    <div className="p-2">HTTP request</div>
                                    <div className="p-2">Description</div>
                                </div>
                                <div className="bg-gray-100 p-2 border-b border-gray-200">
                                    URIs relative to{" "}
                                    <span className="font-medium">https://www.googleapis.com/youtube/v3</span>
                                </div>
                                <div className="grid  table-cols border-b border-gray-200">
                                    <div className="p-2 ">
                                        <a href="list" className="table-link">
                                            list
                                        </a>
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>GET /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-black">
                                        Returns a list of channel activity events that match the request
                                        criteria. For example, you can retrieve events associated with a
                                        particular channel or with the user's own channel.
                                    </div>
                                </div>

                                <div className="grid  table-cols  ">
                                    <div className="p-2 ">
                                        <a href="insert" className="table-link">
                                            insert
                                        </a>{" "}
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>POST /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-red-500">
                                        <strong>Note</strong>: This method has been deprecated and is no
                                        longer supported.
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* GuideCategories */}

                        <section id="guide-categories" className="mb-4">
                            <div className="flex items-center gap-4 group mb-6">
                                <h3 className="text-xl text-gray-900">GuideCategories</h3>
                                <button
                                    className=" hidden group-hover:block"
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            window.location.origin + "/#guide-categories"
                                        );
                                        alertHandler();
                                    }}
                                >
                                    <IoLinkOutline size={22} className="hover:text-blue-600" />
                                </button>
                            </div>
                            <p className="mb-4">
                                An <span className="code">activity</span> resource contains information about
                                an action that a particular channel, or user, has taken on YouTube. The
                                actions reported in activity feeds include rating a video, sharing a video,
                                marking a video as a favorite, uploading a video, and so forth. Each{" "}
                                <span className="code">activity</span> resource identifies the type of action,
                                the channel associated with the action, and the resource(s) associated with
                                the action, such as the video that was rated or uploaded.
                            </p>
                            <p className="mb-4">
                                For more information about this resource, see its{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#resource"
                                    className="text-blue-600"
                                >
                                    resource representation
                                </a>{" "}
                                and list of{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#properties"
                                    className="text-blue-600"
                                >
                                    {" "}
                                    properties
                                </a>
                                .
                            </p>

                            <div className=" text-sm text-gray-900 border-y border-gray-200 mb-8">
                                <div className="grid  table-cols bg-gray-200  font-semibold border-b border-gray-200">
                                    <div className="p-2">Method</div>
                                    <div className="p-2">HTTP request</div>
                                    <div className="p-2">Description</div>
                                </div>
                                <div className="bg-gray-100 p-2 border-b border-gray-200">
                                    URIs relative to{" "}
                                    <span className="font-medium">https://www.googleapis.com/youtube/v3</span>
                                </div>
                                <div className="grid  table-cols border-b border-gray-200">
                                    <div className="p-2 ">
                                        <a href="list" className="table-link">
                                            list
                                        </a>
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>GET /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-black">
                                        Returns a list of channel activity events that match the request
                                        criteria. For example, you can retrieve events associated with a
                                        particular channel or with the user's own channel.
                                    </div>
                                </div>

                                <div className="grid  table-cols  ">
                                    <div className="p-2 ">
                                        <a href="insert" className="table-link">
                                            insert
                                        </a>{" "}
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>POST /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-red-500">
                                        <strong>Note</strong>: This method has been deprecated and is no
                                        longer supported.
                                    </div>
                                </div>
                            </div>
                        </section>
                    </ScrollSpy>
                </section>
            </ScrollSpy>
        </article>
    );
};

export default Article;
