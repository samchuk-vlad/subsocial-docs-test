(function() {var implementors = {};
implementors["async_channel"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.FusedStream.html\" title=\"trait futures_core::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"async_channel/struct.Receiver.html\" title=\"struct async_channel::Receiver\">Receiver</a>&lt;T&gt;","synthetic":false,"types":["async_channel::Receiver"]}];
implementors["futures_channel"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.FusedStream.html\" title=\"trait futures_core::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.Receiver.html\" title=\"struct futures_channel::mpsc::Receiver\">Receiver</a>&lt;T&gt;","synthetic":false,"types":["futures_channel::mpsc::Receiver"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.FusedStream.html\" title=\"trait futures_core::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.UnboundedReceiver.html\" title=\"struct futures_channel::mpsc::UnboundedReceiver\">UnboundedReceiver</a>&lt;T&gt;","synthetic":false,"types":["futures_channel::mpsc::UnboundedReceiver"]}];
implementors["futures_core"] = [];
implementors["libp2p_swarm"] = [{"text":"impl&lt;TBehaviour, TInEvent, TOutEvent, THandler, TConnInfo&gt; <a class=\"trait\" href=\"futures_core/stream/trait.FusedStream.html\" title=\"trait futures_core::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"libp2p_swarm/struct.ExpandedSwarm.html\" title=\"struct libp2p_swarm::ExpandedSwarm\">ExpandedSwarm</a>&lt;TBehaviour, TInEvent, TOutEvent, THandler, TConnInfo&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TBehaviour: <a class=\"trait\" href=\"libp2p_swarm/trait.NetworkBehaviour.html\" title=\"trait libp2p_swarm::NetworkBehaviour\">NetworkBehaviour</a>&lt;ProtocolsHandler = THandler&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;THandler: <a class=\"trait\" href=\"libp2p_swarm/protocols_handler/trait.IntoProtocolsHandler.html\" title=\"trait libp2p_swarm::protocols_handler::IntoProtocolsHandler\">IntoProtocolsHandler</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;TInEvent: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;TOutEvent: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;THandler::<a class=\"type\" href=\"libp2p_swarm/protocols_handler/trait.IntoProtocolsHandler.html#associatedtype.Handler\" title=\"type libp2p_swarm::protocols_handler::IntoProtocolsHandler::Handler\">Handler</a>: <a class=\"trait\" href=\"libp2p_swarm/protocols_handler/trait.ProtocolsHandler.html\" title=\"trait libp2p_swarm::protocols_handler::ProtocolsHandler\">ProtocolsHandler</a>&lt;InEvent = TInEvent, OutEvent = TOutEvent&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;TConnInfo: <a class=\"trait\" href=\"libp2p_core/connection/trait.ConnectionInfo.html\" title=\"trait libp2p_core::connection::ConnectionInfo\">ConnectionInfo</a>&lt;PeerId = <a class=\"struct\" href=\"libp2p_core/peer_id/struct.PeerId.html\" title=\"struct libp2p_core::peer_id::PeerId\">PeerId</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["libp2p_swarm::ExpandedSwarm"]}];
implementors["sp_utils"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.FusedStream.html\" title=\"trait futures_core::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"sp_utils/mpsc/struct.TracingUnboundedReceiver.html\" title=\"struct sp_utils::mpsc::TracingUnboundedReceiver\">TracingUnboundedReceiver</a>&lt;T&gt;","synthetic":false,"types":["sp_utils::mpsc::inner::TracingUnboundedReceiver"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()